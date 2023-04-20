import React from 'react';
import { Text, View } from 'react-native';

import Clipboard from '../../assets/clipboard.svg';
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Clipboard
        width={56}
        height={56}
      />

      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas
      </Text>
      
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}