import React, { useContext } from 'react'

import { NextPage } from "next";
import { StoreContext } from "../store/ToDoListStore";
import { useObserver } from "mobx-react-lite";

const TodoListPage: NextPage = () =>{
  const context = useContext(StoreContext) // เป็นการบอกว่าต้องการจะใช้ state ที่เก็บอยู่ใน store
  return useObserver(() => (
    <>
      <form onSubmit={(value) => {
          value.preventDefault()
          context.setTodoList(value) // เรียนก function ที่อยู่ใน ToDoListStore บรรทัดที่ 12 
          // เพื่อนำค่าที่ได้จากการ submit ไปเปลี่ยนค่าใหม่ และนำมาแสดงในบรรทัดที่ 24 25 26
        }}
      >
        Title:
        <input type="text" name="title"/><br/>
        Description:
        <input type="text" name="description"/>
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <h1>Title: {context.todoList.title}</h1>
      <h3>Description: {context.todoList.description}</h3>
      {console.log('Test : ', context.todoList.title)}
    </>
  ))
}

export default TodoListPage;