import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';
import { useThemeScheme } from '@/hooks/useThemeScheme';
import { type StackNavigation } from '@/navigators/RootNavigator';
import Header from '@/component/home/Header';

const Home = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const colors = useThemeScheme();

    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$white',
        '@media (max-width: 599px)': {
            backgroundColor: '$gray',
        },
        '@media (min-width: 600px) and (max-width: 1199px)': {
            backgroundColor: '$secondary',
        },
        '@media (min-width: 1200px)': {
            backgroundColor: '$primary',
        },
    },
    title: {
        fontSize: '$text_lg',
        color: '$gray',
        fontWeight: '$font_bold',
        borderWidth: '$border',
        borderColor: '$border_primary',
    },
});

export default Home;
