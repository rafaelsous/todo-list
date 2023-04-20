import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

type TaskProps = {
  description: string
  isCompleted?: boolean
  onRemove: () => void
  onChangeStatus: () => void
}

export function Task({ description, isCompleted = false, onRemove, onChangeStatus }: TaskProps) {
  return (
    <View style={styles.container}>
      {
        isCompleted
        ? (
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.7}
            onPress={onChangeStatus}
          >
            <Feather name="check-circle" size={24} color="#808080" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.7}
            onPress={onChangeStatus}
          >
            <Feather name="circle" size={24} color="#808080" />
          </TouchableOpacity>
        ) 
      }

      <Text
        style={[styles.text, {
          textDecorationLine: isCompleted ? 'line-through' : 'none',
          color: isCompleted ? '#80808080' : '#F2F2F2F2'
        }]}
      >
        {description}
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}