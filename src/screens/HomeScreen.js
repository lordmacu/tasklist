import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import TaskList from '../components/TaskList';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <TaskList navigation={navigation} />
      <Button
        title="Crear Nueva Tarea"
        onPress={() => navigation.navigate('CreateTask')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default HomeScreen;
