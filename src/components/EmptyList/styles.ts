import { StyleSheet } from 'react-native'

import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1 ,
    borderTopColor: THEME.COLORS.GRAY_400,
  },
  title: {
    marginTop: 20,
    color: THEME.COLORS.GRAY_300,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  subtitle: {
    color: THEME.COLORS.GRAY_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
})