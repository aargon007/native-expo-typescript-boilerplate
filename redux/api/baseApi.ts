import {
    type BaseQueryApi,
    type BaseQueryFn,
    type DefinitionType,
    type FetchArgs,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { type RootState } from '../store';
import { logoutUser, setToken } from 'redux/features/accountSlice';
import { Mutex } from 'async-mutex'

// create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: '',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).account.access_token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()

    let result: any = await baseQuery(args, api, extraOptions);

    if (result?.data?.statusCode === 401 || result?.data?.statusCode === 403 || result.meta?.response?.status === 500) {
        // console.log(result);

        //* Send Refreshg
        const refreshToken = (api.getState() as RootState).account.refresh_token;
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshResult: any = await baseQuery(
                    {
                        url: "/auth/token/refresh",
                        method: 'POST',
                        body: {
                            refresh_token: refreshToken,
                        },
                    },
                    api, extraOptions);

                // console.log(refreshResult, "ee");

                // const res = await fetch('http://13.58.35.37:8000/api/v1/auth/token/refresh', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Authoriztion': `Bearer ${(api.getState() as RootState).account.access_token}`
                //     },
                //     body: JSON.stringify({
                //         refresh_token: refreshToken,
                //     }),
                // });

                // const data = await res.json();
                // console.log(data);

                if (refreshResult?.data?.access_token) {
                    // const user = (api.getState() as RootState).auth.user;

                    api.dispatch(
                        setToken(refreshResult?.data?.access_token)
                    );

                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logoutUser());
                }
            } catch (err) {
                console.log(err);
                api.dispatch(logoutUser());
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["user"],
    endpoints: () => ({})
});