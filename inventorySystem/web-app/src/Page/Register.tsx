import React, { FormEvent, useState } from 'react'
import InputComp from '../component/Input'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import {firebaseDB} from "../configFirebase/firebase"
import {collection, doc, setDoc} from "firebase/firestore"
import { auth } from '../configFirebase/firebase';

type authAcc = {firstName:string ,lastName:string,email:string , password:string}

function Register() {
    const [userAuth , setUserAuth] = useState<authAcc>({firstName:"",lastName:"",email: "" , password : ""});
    const userCollection = collection(firebaseDB , "users");
    const direct = useNavigate();

    const signValidation = async (e:FormEvent) =>{
      e.preventDefault();
        try{
           await createUserWithEmailAndPassword(auth,userAuth.email , userAuth.password).then(()=>{
             setDoc(doc(userCollection,userAuth.email),{firstname:userAuth.firstName,lastname:userAuth.lastName ,email: userAuth.email,manager:false}).catch((error)=>{console.error(error)})
             direct('/');
           })
        }
        catch(error){
            alert("Opps! Your account is already Existed please use another email");
            
            console.error(error);
        }   
    }

  return (
    <div>
        <form onSubmit={signValidation}>
        <InputComp name='firstName' type='text' placeholder='First Name' onChange={(e)=>setUserAuth((user) => ({...user , firstName:e.target.value}))}></InputComp>
        <InputComp name='lastname' type='text' placeholder='Last Name' onChange={(e)=>setUserAuth((user) => ({...user , lastName:e.target.value}))}></InputComp>
        <InputComp name='email' type='email' placeholder='Email' onChange={(e)=>setUserAuth((user) => ({...user , email:e.target.value}))}></InputComp>
        <InputComp name='password' type='password' placeholder='Password' onChange={(e)=>setUserAuth((user) => ({...user , password:e.target.value}))}></InputComp>
        <Button>Sign up</Button>
        </form>
    </div>
  )
}

export default Register