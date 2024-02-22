import {
    fetchTasks as fetchTasksApi,
    addTask as addTaskApi,
    updateTask as updateTaskApi,
    deleteTask as deleteTaskApi,
  } from '../../api/tasksApi';
  
   export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
  export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
  export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
  export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
  export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
  export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';
  export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
  export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
  
  export const fetchTasks = () => async (dispatch) => {
    try {
      const tasks = await fetchTasksApi();
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: tasks });
    } catch (error) {
      dispatch({ type: FETCH_TASKS_FAILURE, payload: error });
    }
  };
  
   export const addTask = (task) => async (dispatch) => {
    try {
      const newTask = await addTaskApi(task);
      dispatch({ type: ADD_TASK_SUCCESS, payload: newTask });
    } catch (error) {
      dispatch({ type: ADD_TASK_FAILURE, payload: error });
    }
  };
  
   export const updateTask = (id, updates) => async (dispatch) => {
    try {
      const updatedTask = await updateTaskApi(id, updates);
      dispatch({ type: UPDATE_TASK_SUCCESS, payload: updatedTask });
    } catch (error) {
      dispatch({ type: UPDATE_TASK_FAILURE, payload: error });
    }
  };
  
   export const deleteTask = (id) => async (dispatch) => {
    try {
      await deleteTaskApi(id);
      dispatch({ type: DELETE_TASK_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_TASK_FAILURE, payload: error });
    }
  };
  