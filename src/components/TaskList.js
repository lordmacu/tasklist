import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { deleteTask } from '../redux/actions/taskActions';

const TaskList = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks.tasks.reverse());

  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id) => {
    navigation.navigate('EditTask', { taskId: id });
  };

  const renderItem = ({ item }) => (
    <TaskItem
      task={item}
      onEdit={handleEditTask}
      onDelete={handleDeleteTask}
    />
  );

  if (tasks.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTasksText}>No hay tareas disponibles.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    padding: 20,
  },
  noTasksText: {
    fontSize: 18,
    color: '#666',
  },
});

export default TaskList;
