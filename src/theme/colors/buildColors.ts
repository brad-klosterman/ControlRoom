/* eslint-disable sort-keys-fix/sort-keys-fix */
import { desaturate, mix, shade, tint } from 'polished';

import ThemeColors from 'theme/colors/colors';

// TODO: define colors in theme

function buildColorRamp(color: string, isDarkMode = true) {
  if (isDarkMode) {
    return {
      100: desaturate(0.3, mix(0.2, color, '#1f2022')),
      200: desaturate(0.2, mix(0.2, color, '#1f2022')),
      300: desaturate(0.2, mix(0.3, color, '#1f2022')),
      400: desaturate(0.1, mix(0.5, color, '#1f2022')),
      500: color,
      600: tint(0.2, color),
      700: tint(0.3, color),
      800: tint(0.4, color),
      900: tint(0.6, color),
    };
  }

  return {
    100: tint(0.9, color),
    200: tint(0.8, color),
    300: tint(0.6, color),
    400: tint(0.4, color),
    500: color,
    600: shade(0.2, color),
    700: shade(0.3, color),
    800: shade(0.4, color),
    900: shade(0.6, color),
  };
}

function buildBgColorRamp(color: string, isDarkMode = true) {
  const colorRampFunction = isDarkMode ? tint : shade;

  return {
    100: color,
    200: colorRampFunction(0.05, color),
    300: colorRampFunction(0.1, color),
    400: colorRampFunction(0.15, color),
    500: colorRampFunction(0.2, color),
    600: colorRampFunction(0.3, color),
    700: colorRampFunction(0.5, color),
    800: colorRampFunction(0.7, color),
    900: colorRampFunction(0.8, color),
  };
}

export default function buildColors(isDarkMode = true) {
  const baseColors = {
    base: {
      900: ThemeColors.Base, // 'rgba(15,16,22,1)',
      800: 'rgba(18,19,26,1)',
      700: 'rgba(22,22,30,1)',
      600: 'rgba(24,25,34,1)',
      500: 'rgba(26,28,39,1)',
      400: 'rgba(29,29,42,1)',
      300: 'rgba(32,34,47,1)',
      200: 'rgba(35,37,51,1)',
      100: 'rgba(38,40,55,1)',
    },
    bg: {
      800: 'rgba(2,2,2,1)',
      700: 'rgba(4,3,5,1)',
      600: 'rgba(5,5,7,1)',
      500: 'rgba(7,6,9,1)',
      400: 'rgba(9,8,12,1)',
      300: 'rgba(10,10,14,1)',
      200: 'rgba(12,12,17,1)',
      100: 'rgba(13,14,24,1)',
    },
    sidebar: ThemeColors.Sidebar,
    primary: {
      900: 'rgba(29,100,48,1)',
      800: 'rgba(32,117,53,1)',
      700: 'rgba(35,134,58,1)',
      600: 'rgba(38,151,63,1)',
      500: 'rgba(40,167,69,1)',
      400: 'rgba(43,184,74,1)',
      300: 'rgba(46,201,79,1)',
      200: 'rgba(49,218,51,1)',
      100: 'rgba(52,235,55,1)',
    },
    accent: {
      500: 'rgba(24,19,38,1)',
    },
    background: buildBgColorRamp(
      isDarkMode ? ThemeColors.Background : '#fff',
      isDarkMode,
    ),
    grey: {
      100: 'rgba(97,97,97,1)',
      200: 'rgba(45,45,45,1)',
      300: 'rgba(39,39,39,1)',
      400: 'rgba(33,33,33,1)',
      500: 'rgba(27,27,27,1)',
      600: 'rgba(17,17,17,1)',
    },
    toolbar: buildColorRamp(ThemeColors.Toolbar, isDarkMode),
    secondary: buildColorRamp(ThemeColors.Secondary, isDarkMode),
    success: buildColorRamp(ThemeColors.Success, isDarkMode),
    warning: buildColorRamp(ThemeColors.Warning, isDarkMode),
    error: buildColorRamp(ThemeColors.Error, isDarkMode),
    info: buildColorRamp(ThemeColors.Info, isDarkMode),
  };

  return {
    ...baseColors,
    button: {
      primary: ThemeColors.Primary,
    },
    table: {
      border: baseColors.base[100],
      content: baseColors.bg[500],
      even: baseColors.base[700],
      odd: baseColors.bg[400],
    },
    panel: {
      background: baseColors.base[800],
    },
    icon: {
      default: baseColors.base[100],
      emphasise: baseColors.primary[600],
      error: baseColors.error[500],
      warning: baseColors.warning[500],
      inverted: baseColors.background[100],
      primary: isDarkMode ? '#fff' : '#000',
      secondary: '#ACACB2',
    },
    outline: {
      default: baseColors.base[200],
      errorPrimary: baseColors.error[500],
      errorSecondary: baseColors.error[300],
      focusPrimary: baseColors.primary[600],
      focusSecondary: baseColors.primary[600],
      primary: ThemeColors.Primary,
    },
    text: {
      emphasise: baseColors.primary[500],
      error: baseColors.error[500],
      warning: baseColors.warning[500],
      inverted: baseColors.background[100],
      primary: isDarkMode ? '#fff' : '#858585',
      secondary: '#ACACB2',
    },
  };
}
