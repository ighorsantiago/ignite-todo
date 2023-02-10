import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import uuid from 'react-native-uuid';
import { AntDesign } from '@expo/vector-icons';

import { Task } from "../../components/Task";

import { styles } from './styles';

const logo = require('../../assets/logo.png');
const empty = require('../../assets/empty.png');

interface taskProps {
  id: string;
  task: string;
}

export function Home() {

  // const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Ighor', 'Yasmin', 'Erica', 'Danie', 'Lucca', 'Charles', 'Harley'];

  const [tasks, setTasks] = useState<taskProps[]>([]);
  const [text, setText] = useState('');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleTaskAdd() {

    const newTask = {
      id: uuid.v4().toString(),
      task: text,
    }

    setTasks(prevState => [...prevState, newTask]);
    setText('');
  }

  function handleCheck(taskId: string) {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(prevState => prevState.filter(task => task !== taskId));
    } else {
      setCompletedTasks(prevState => [...prevState, taskId]);
    }
  }

  function handleTaskRemove(selectedTask: taskProps) {

    Alert.alert('Remover', `Deseja realmente remover a tarefa selecionada?`, [
      {
        text: 'Sim',
        // onPress: () => Alert.alert("Deletado")
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.id !== selectedTask.id))
          setCompletedTasks(prevState => prevState.filter(task => task !== selectedTask.id))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Image source={logo} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={text}
            onChangeText={setText}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksContainer}>
          <View style={styles.info}>
            <View style={styles.box}>
              <Text style={styles.createdLabel}>Criadas</Text>
              <View style={styles.counter}>
                <Text style={{ fontSize: 12 }}>{tasks.length}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.doneLabel}>Concluídas</Text>
              <View style={styles.counter}>
                <Text style={{ fontSize: 12 }}>{completedTasks.length}</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            style={{ padding: 24 }}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                task={item.task}
                onCheck={() => handleCheck(item.id)}
                done={completedTasks.includes(item.id)}
                onRemove={() => handleTaskRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.emptyContent}>
                <Image source={empty} style={{ alignSelf: 'center', marginTop: 48 }} />
                <Text style={styles.text}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.sub}>
                  Você ainda não tem tarefas cadastradas
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
