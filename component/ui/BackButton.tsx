import { useColors } from '@/hooks/useColors';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import ArrowLeft from '../icons/ArrowLeft';

export default function BackButton() {
    const { goBack } = useNavigation();
    const { text } = useColors();

    return (
        <Button iconButton onPress={goBack}>
            <ArrowLeft color={text} />
        </Button>
    );
}