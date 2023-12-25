import React, { useState } from 'react'
import InputComp from '../component/Input'
import Button from '../component/Button'


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configFirebase/firebase';

function Register() {
    const [userAuth , setUserAuth] = useState<{email:string , password:string}>({email: "" , password : ""});
    

    const signValidation = async () =>{
        try{
           await createUserWithEmailAndPassword(auth,userAuth.email , userAuth.password);
        }
        catch(error){
            alert("Opps! Your account is already Existed please use another email");
            
            console.error(error);
        }   
    }

  return (
    <div>
        {/* <form onSubmit={signValidation}> */}
        <InputComp type='email' placeholder='Email' onChange={(e)=>setUserAuth((user) => ({...user , email:e.target.value}))}></InputComp>
        <InputComp type='password' placeholder='Password' onChange={(e)=>setUserAuth((user) => ({...user , password:e.target.value}))}></InputComp>
        <Button onClick={signValidation}>Sign up</Button>
        {/* </form> */}
    </div>
  )
}

export default Register