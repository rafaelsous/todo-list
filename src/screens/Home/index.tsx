import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { Task } from '../../components/Task'

import { styles } from './styles'

type TaskData = {
  id: string
  description: string
  isCompleted: boolean
}

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TaskData[]>([])

  function handleTaskAdd() {
    setTasks(prevState => [...prevState, {
      id: String(prevState.length + 1),
      description: newTask,
      isCompleted: false
    }])

    setNewTask('')
    Keyboard.dismiss()
  }

  function handleTaskRemove(taskId: string) {
    setTasks(prevState => prevState.filter(task => task.id !== taskId))
  }

  function handleToggleTaskStatus(taskId: string) {
    setTasks(tasks.map(task => task.id === taskId
      ? {
        ...task,
        isCompleted: !task.isCompleted,
      }
      : task
    ));
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={newTask}
          onChangeText={setNewTask}
          autoFocus
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleTaskAdd}
        >
          <Feather name="plus-circle" size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View 
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          paddingHorizontal: 24,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Text 
            style={{ 
              fontSize: 14, 
              color: '#4EA8DE', 
              fontWeight: 'bold'
            }}
          >
            Criadas
          </Text>
          
          <Text
            style={{
              width: 24,
              height: 24,
              textAlign: 'center',
              verticalAlign: 'middle',
              fontSize: 12,
              fontWeight: 'bold',
              borderRadius: 50,
              color: '#D9D9D9',
              backgroundColor: '#333333',
            }}
          >
            {tasks.length > 0 ? tasks.filter(task => task.isCompleted !== true).length : 0}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Text style={{
            fontSize: 14, 
            color: '#8284FA', 
            fontWeight: 'bold' }}
          >
            Concluídas
          </Text>

          <Text
            style={{
              width: 24,
              height: 24,
              textAlign: 'center',
              verticalAlign: 'middle',
              fontSize: 12,
              fontWeight: 'bold',
              borderRadius: 50,
              color: '#D9D9D9',
              backgroundColor: '#333333',
            }}
          >
            {tasks.length > 0 ? tasks.filter(task => task.isCompleted === true).length : 0}
          </Text>
        </View>
      </View>

      <FlatList
        style={styles.taskListContainer}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            description={item.description}
            isCompleted={item.isCompleted}
            onRemove={() => handleTaskRemove(item.id)}
            onChangeStatus={() => handleToggleTaskStatus(item.id)}
          />
        )}
        contentContainerStyle={{
          gap: 8,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text>Ainda não foi cadastrada nenhum tarefa</Text>
        }
      />
    </View>
  )
}