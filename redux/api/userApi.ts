import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: builder => ({
        // save search
        saveSearch: builder.mutation({
            query: data => ({
                method: 'POST',
                url: '/save',
                body: data,
            }),
            invalidatesTags: ['user'],
        }),
        // get user
        getUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/auth',
            }),
            providesTags: ['user'],
        }),
    }),
});

export const { useGetUserQuery, useSaveSearchMutation } = userApi;

export default userApi;
