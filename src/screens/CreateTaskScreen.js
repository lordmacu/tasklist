import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const CreateTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleCreateTask = () => {
    dispatch(addTask({ title, completed }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título de la Tarea:</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el título de la tarea"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>¿Completada?</Text>
        <Switch
          value={completed}
          onValueChange={setCompleted}
        />
      </View>
      <Button title="Crear Tarea" onPress={handleCreateTask} />
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

export default CreateTaskScreen;
