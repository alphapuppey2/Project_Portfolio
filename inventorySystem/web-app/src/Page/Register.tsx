import React, { FormEvent, useState } from 'react'
import InputComp from '../component/Input'
import Button from '../component/Button'


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configFirebase/firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [userAuth , setUserAuth] = useState<{email:string , password:string}>({email: "" , password : ""});
    const direct = useNavigate();

    const signValidation = async (e:FormEvent) =>{
      e.preventDefault();
        try{
           await createUserWithEmailAndPassword(auth,userAuth.email , userAuth.password);

          // redirect("dashboard");
          //  direct('/dashboard');
        }
        catch(error){
            alert("Opps! Your account is already Existed please use another email");
            
            console.error(error);
        }   
    }

  return (
    <div>
        <form onSubmit={signValidation}>
        <InputComp name='email' type='email' placeholder='Email' onChange={(e)=>setUserAuth((user) => ({...user , email:e.target.value}))}></InputComp>
        <InputComp name='password' type='password' placeholder='Password' onChange={(e)=>setUserAuth((user) => ({...user , password:e.target.value}))}></InputComp>
        <Button>Sign up</Button>
        </form>
    </div>
  )
}

export default Register