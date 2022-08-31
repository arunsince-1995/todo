import React, { useState } from 'react'
import { HStack, Input,Button, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

const AddToDo = ({addToDo}) => {

  const [content, setContent] = useState('')
  const toast = useToast()

  
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(content.length === 0){
        toast({
          title: 'No Content',
          
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      }
      const todo ={
        id: nanoid(),
        body:content

      }
      addToDo(todo)
      setContent('')
      


    }
  return (
    <form onSubmit={handleSubmit}>
        <HStack mt={8}>
          <Input placeholder='add todo here' variant='filled' value={content}  onChange={(e)=>setContent(e.target.value)} /> 
          <Button colorScheme="pink" px={8} type="submit">Add ToDo</Button> 

        </HStack>

    </form>
  )
}

export default AddToDo