// src/styles/commonStyles.js
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Define your colors, typography, spacing, dimensions, and borders
const colors = {
    primary: '#3498db',
    secondary: '#2ecc71',
    white: '#ffffff',
    black: '#000000',
    gray: '#7f8c8d',
};

const typography = {
    fontSizeSmall: wp('3%'),
    fontSizeMedium: wp('4%'),
    fontSizeLarge: wp('5%'),
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightBold: '700',
};

const spacing = {
    paddingSmall: wp('2%'),
    paddingMedium: wp('4%'),
    paddingLarge: wp('6%'),
    marginSmall: wp('2%'),
    marginMedium: wp('4%'),
    marginLarge: wp('6%'),
};

const dimensions = {
    widthFull: '100%',
    heightFull: '100%',
    borderRadiusSmall: wp('1%'),
    borderRadiusMedium: wp('2%'),
    borderRadiusLarge: wp('3%'),
};

const borders = {
    borderWidthThin: StyleSheet.hairlineWidth,
    borderWidthMedium: 2,
    borderWidthThick: 4,
    borderColorPrimary: colors.primary,
    borderColorSecondary: colors.secondary,
    borderColorGray: colors.gray,
};

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.paddingMedium,
        margin: spacing.marginMedium,
        backgroundColor: colors.white,
    },
    text: {
        fontSize: typography.fontSizeMedium,
        color: colors.black,
        fontWeight: "400",
    },
    borderThin: {
        borderWidth: borders.borderWidthThin,
        borderColor: borders.borderColorGray,
    },
    borderMedium: {
        borderWidth: borders.borderWidthMedium,
        borderColor: borders.borderColorPrimary,
    },
    borderThick: {
        borderWidth: borders.borderWidthThick,
        borderColor: borders.borderColorSecondary,
    },
    borderRadiusSmall: {
        borderRadius: dimensions.borderRadiusSmall,
    },
    borderRadiusMedium: {
        borderRadius: dimensions.borderRadiusMedium,
    },
    borderRadiusLarge: {
        borderRadius: dimensions.borderRadiusLarge,
    },
});

export { colors, typography, spacing, dimensions, borders, commonStyles };
