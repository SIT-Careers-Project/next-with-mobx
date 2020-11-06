import { action, observable } from "mobx";

import { TodoListModel } from "../models/todo_list_model";
import { createContext } from "react";

export class TodoListPageContext {
  //  @observable เป็นเหมือนกำหนดค่าเริ่มต้องของ state คล้ายๆ กับ sit-careers-frontend การกำหนด Type
  // ใน action ของ redux
  @observable todoList: TodoListModel = { title: '', description: '' }; 

  // @action เป็นตัวที่เราต้องการจะเปลี่ยนค่าใน state ที่เรากำหนดใน @observable 
  @action setTodoList = (value: any) => {
    console.log('In setTodoList: ', value.target[0].value, value.target[1].value)
    // this.todoList เป็นการเอาค่าเก่าที่มีอยู่ ใน @observable มาเปลี่ยนค่าใหม่ ด้วย value ที่ถูกส่งมาจาก
    // features/TodoList/components/index บรรทัดที่ 13 
		this.todoList = {
			title: value.target[0].value,
			description: value.target[1].value
		}
	};
}

export const StoreContext = createContext(new TodoListPageContext());