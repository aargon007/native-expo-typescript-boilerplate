import { useColors } from '@/hooks/useColors';
import { Pressable, Text, type PressableProps, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

type ButtonProps = {
    variant?: 'default' | 'primary' | 'outlined';
    size?: 'default' | 'small';
    iconButton?: boolean;
    textStyle?: StyleProp<TextStyle>;
} & PressableProps;

export default function Button({
    style,
    children,
    iconButton,
    variant = 'default',
    size = 'default',
    textStyle,
    disabled,
    ...props
}: ButtonProps) {
    const { card, primary, border, text } = useColors();

    return (
        <Pressable
            {...props}
            style={[
                { height: size === 'small' ? 36 : 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22 },
                variant === 'default' ? { backgroundColor: card, borderWidth: 1, borderColor: border } : null,
                variant === 'primary' ? { backgroundColor: primary } : null,
                variant === 'outlined' ? { borderWidth: 1, borderColor: border } : null,
                iconButton ? { width: size === 'small' ? 36 : 44 } : { paddingHorizontal: size === 'small' ? 16 : 20 },
                disabled ? { opacity: 0.3, pointerEvents: 'none' } : null,
                style as StyleProp<ViewStyle>,
            ]}>
            <Text
                style={[
                    { fontFamily: 'Roboto-Medium' },
                    variant === 'primary' ? { color: '#FFFFFF' } : { color: text },
                    size === 'small' ? { fontSize: 12 } : null,
                    textStyle,
                ]}>
                {children as React.ReactNode}
            </Text>
        </Pressable>
    );
}
