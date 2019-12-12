import * as types from './actionTypes';

// STEP 3 OF THE GENERAL STEPS

// WE HAVE SETTLED FOR 3 SLICES OF STATE
// THIS MEANS 3 REDUCERS!

// REDUCER 1 - count
const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    default:
      return count;
  }
}

// REDUCER 2 - form
const initialForm = { fname: '', lname: '' };
export function formReducer(form = initialForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value,
      };
    case types.SUBMIT:
      return initialForm;
    default:
      return form;
  }
}

// REDUCER 3 - todos
const initialTodos = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];
export function todosReducer(todos = initialTodos, action) {
  switch (action.type) {
    case types.MARK_TODO:
      return todos.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo;
      });
    default:
      return todos;
  }
}
