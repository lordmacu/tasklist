const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Error fetching tasks');
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error('fetchTasks error:', error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Error adding task');
    const newTask = await response.json();
    return newTask;
  } catch (error) {
    console.error('addTask error:', error);
    throw error;
  }
};

export const updateTask = async (id, updates) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Error updating task');
    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    console.error('updateTask error:', error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting task');
    return id;
  } catch (error) {
    console.error('deleteTask error:', error);
    throw error;
  }
};
