import { useState, useEffect} from "react"
import React  from 'react'
import Text from "./text";
import Button from '@mui/material/Button';
import { FormControl, Input ,InputLabel } from '@mui/material';
import axios from 'axios'
import { async } from "@firebase/util";




const Messenger = () => {
    const [input ,setInput]=useState('');
    const [message,setmessage]=useState([]);
    const [userName , setUserName ]=useState("");
    // console.log(userName);

    // console.log(input);
    // console.log(message);
   

    const sendMessage= async (event)=>{
        event.preventDefault();
        const data={
          message:input,
          userName : userName,
        }
        // console.log(data);
        axios.post('https://messenger-clone-da2c0-default-rtdb.firebaseio.com/message.json',(data),{
          headers: {"Content-Type": "application/json"}
        }).then((res)=>{
          // console.log(res);
        })
        

        
        setmessage([...message , {userName:userName , print:input}]);
        setInput('');
        }
        
        const getdata = async()=>{
         const res =await axios.get('https://messenger-clone-da2c0-default-rtdb.firebaseio.com/message.json')
            console.log(res.data)
        }

        const putdata = async()=>{
          const res2 =await axios.post('https://messenger-clone-da2c0-default-rtdb.firebaseio.com/message.json' , {id:update})
            //  console.log(res2)
         }
            const update = [message]
        useEffect(()=>{
            getdata();
        },[])
      
        useEffect(()=>{
            setUserName(prompt('please enter your name...'))
        },[])
       
  return (
    <>
    <h1>hello {userName}</h1>
    
    <form>
        <FormControl>
            <InputLabel htmlFor="my-input">Enter your message</InputLabel>
            <Input 
            value={input} 
            onChange={e=>setInput(e.target.value)}
            id="my-input" aria-describedby="my-helper-text" />
  
            <Button type="submit" onClick={sendMessage}>send</Button>
        </FormControl>
      </form>
    {
     message && message.map(print =>(
        <Text userName={userName} print={print}/>
       ))
    }
    </>
  )
}

export default Messenger
