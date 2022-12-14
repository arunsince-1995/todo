import React from 'react'
import { VStack, HStack,Text, IconButton, StackDivider, Spacer, Badge} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const ToDoList = ({todos,deleteTodo}) => {

  if(todos.length === 0){
    return(
      <Badge colorScheme='green' p="4" m="4" borderRadius="lg">
        No Activity Pending
      </Badge>
    )
  }
    
  return (
    <VStack 
        divider={<StackDivider />}
         borderColor="gray.100"
        borderWidth="2px" 
         p="4"
         borderRadius="lg"
         w="100%"
         maxWidth={{base: '90vw', sm:"80vw", lg:"50vw", xl:"40vw"}}
         alignItems="stretch"
         mt={8}
         
      >
      {todos.map(todo=>(
        <HStack   key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton icon={<FaTrash/>} isRound="true"  onClick={()=>deleteTodo(todo.id)}/>
        </HStack>
      ))}
    </VStack>
    
  )
}

export default ToDoList