import { StyleSheet } from 'react-native'

import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 4,
    position: 'relative',
    bottom: 30,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,
    borderRadius: 6,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.GRAY_100,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BLUE_DARK,
    borderRadius: 6,
  },
  taskListContainer: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
  }
})
