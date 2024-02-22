import {
  FETCH_TASKS_SUCCESS,
  ADD_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
} from '../actions/taskActions';

const initialState = {
tasks: [],
};

const taskReducer = (state = initialState, action) => {
switch (action.type) {
  case FETCH_TASKS_SUCCESS:
    return {
      ...state,
      tasks: action.payload.reverse(),
    };
  case ADD_TASK_SUCCESS:
    return {
      ...state,
      tasks: [action.payload, ...state.tasks],
    };
  case UPDATE_TASK_SUCCESS:
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      ),
    };
  case DELETE_TASK_SUCCESS:
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.payload),
    };
  default:
    return state;
}
};

export default taskReducer;
