import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
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
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    fontSize: 16,
    color: '#F2F2F2',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  taskListContainer: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
  }
})
