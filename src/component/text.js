
import React, { useEffect } from 'react'
import './messenger.css'
import { Card , CardContent ,Typography} from '@mui/material';


const Text = ({ userName,print}) => {
  useEffect(()=>{
    // console.log(userName);
    // console.log(print.userName);
   
  },[])
    // const isUser = userName === print.userName;
    // console.log(isUser);
  return (
    <>

    <div className={`message ${userName === print.userName &&"user "}`} >
   
    <Card sx={ userName === print.userName && {backgroundColor : 'blue'} }>
      
        <CardContent>
            <Typography 
            color='black'
            variant='h4'
            component='h2'
            >
        {print.userName}:{print.print}
        </Typography>
        </CardContent>
    </Card>
    </div>
     
    </>
  )
}

export default Text
