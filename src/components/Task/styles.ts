import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    fontSize: THEME.FONT_SIZE.MD,
    color: '#F2F2F2',
    lineHeight: 20,
  }
})