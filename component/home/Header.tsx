import { useColors } from 'hooks/useColors';
import { View } from 'react-native';
import { Avatar, Button, Text } from '../ui';

export default function Header() {
    const { text } = useColors();

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 10 }}>
            <Avatar size={44} />
            <View style={{ flex: 1 }}>
                <Text variant="heading">Hi, James 👋</Text>
                <Text numberOfLines={1} variant="body">
                    Discover {text}
                </Text>
            </View>
            <Button iconButton>A</Button>
        </View>
    );
}
