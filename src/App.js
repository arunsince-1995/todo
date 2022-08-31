
import { Heading, VStack,IconButton, useColorMode} from '@chakra-ui/react'
import React from 'react';

import AddToDo from "./Components/AddToDo"
import  ToDoList  from "./Components/ToDoList";
import {FaSun, FaMoon} from "react-icons/fa" 
import { useState, useEffect } from 'react';


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [toDos, setToDo] = useState(()=> JSON.parse(localStorage.getItem("toDos")) || [] );

 useEffect(()=>{
  localStorage.setItem('toDos', JSON.stringify(toDos))

 },[toDos])
  
  
  const addToDo =(todo)=>{
    setToDo([...toDos, todo])

  }

  const deleteTodo = (id) =>{
    const newTodo = toDos.filter(todos =>{
     return todos.id !== id
     
    })
    setToDo(newTodo)
    console.log(newTodo)
    
    
  }

 
  
 
  return (
    <VStack p={4}>
      <IconButton icon={colorMode ==='light' ?  <FaSun /> :<FaMoon/>} isRound="true" size={"lg"} alignSelf="flex-end"  onClick={toggleColorMode} />
      <Heading mb={8} 
      fontWeight="extrabold" 
      size="2xl"
       bgGradient="linear(to-r,green.200, pink.500)"
       bgClip="text">
        Todo Application
        </Heading>
        <ToDoList todos={toDos} deleteTodo={deleteTodo}/>
        <AddToDo  addToDo={addToDo} />
    </VStack>  

    
  
  );
}






export default App;