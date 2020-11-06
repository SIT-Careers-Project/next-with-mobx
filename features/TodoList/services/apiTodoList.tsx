import api from '../../../utils/api'

const TodoList = {
  getTodoList: async () => {
    let response =  await api.get('/todolist');
    return response;
  }
};

export default TodoList;