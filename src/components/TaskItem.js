import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

  const handleDelete = async (taskId) => {
    setIsDeleting(true);
    try {
      await onDelete(taskId);
      setIsDeleting(false);
      setShowDeletedMessage(true);
      setTimeout(() => setShowDeletedMessage(false), 3000);
    } catch (error) {
      console.error(error);
      setIsDeleting(false);
      Alert.alert('Error', 'No se pudo eliminar la tarea.');
    }
  };

  return (
    <View style={styles.container}>
      {showDeletedMessage && (
        <View style={styles.deletedMessageContainer}>
          <Text style={styles.deletedMessageText}>Tarea eliminada</Text>
        </View>
      )}
      <View style={styles.taskInfo}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.status}>{task.completed ? 'Completada' : 'Pendiente'}</Text>
      </View>
      {isDeleting ? (
        <ActivityIndicator size="small" color="#0000ff" style={styles.closeButton} />
      ) : (
        <TouchableOpacity onPress={() => handleDelete(task.id)} style={styles.closeButton}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(task.id)} style={styles.editButton}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  taskInfo: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'transparent',
  },
  deletedMessageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffcccc',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletedMessageText: {
    color: '#ff0000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TaskItem;
