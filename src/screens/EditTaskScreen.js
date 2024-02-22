import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/actions/taskActions';

const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;

  const task = useSelector(state => state.tasks.tasks.find(task => task.id === taskId));

  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title: `Editando: ${task.title}` });
  }, [task, navigation]);

  const handleUpdateTask = () => {
    dispatch(updateTask(taskId, { title, completed }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título de la Tarea: </Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el título de la tarea"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>¿Completada? </Text>
        <Switch
          value={completed}
          onValueChange={setCompleted}
        />
      </View>
      <Button title="Actualizar Tarea" onPress={handleUpdateTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginEnd: 10,
  },
});

export default EditTaskScreen;
