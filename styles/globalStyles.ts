// src/styles/base.js
import EStyleSheet from 'react-native-extended-stylesheet';

// Define your colors, typography, spacing, dimensions, breakpoints, and borders
const colors = {
    primary: '#3498db',
    secondary: '#2ecc71',
    white: '#ffffff',
    black: '#000000',
    gray: '#7f8c8d',
};

const typography = {
    fontSizeSmall: 12,
    fontSizeMedium: 16,
    fontSizeLarge: 20,
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightBold: '700',
};

const spacing = {
    paddingSmall: 8,
    paddingMedium: 16,
    paddingLarge: 24,
    marginSmall: 8,
    marginMedium: 16,
    marginLarge: 24,
};

const dimensions = {
    widthFull: '100%',
    heightFull: '100%',
    borderRadiusSmall: 4,
    borderRadiusMedium: 8,
    borderRadiusLarge: 12,
};

const breakpoints = {
    small: '@media (max-width: 599px)',
    medium: '@media (min-width: 600px) and (max-width: 1199px)',
    large: '@media (min-width: 1200px)',
};

const borders = {
    borderWidthThin: 1,
    borderWidthMedium: 2,
    borderWidthThick: 4,
    borderColorPrimary: colors.primary,
    borderColorSecondary: colors.secondary,
    borderColorGray: colors.gray,
};

// Export the styles
export default EStyleSheet.create({
    ...colors,
    ...typography,
    ...spacing,
    ...dimensions,
    ...borders,
    breakpoints: {
        small: breakpoints.small,
        medium: breakpoints.medium,
        large: breakpoints.large,
    },
});
