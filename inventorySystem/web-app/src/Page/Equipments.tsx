import React, { Suspense, useState } from 'react'
import Button from '../component/Button'


import {firebaseDB} from "../configFirebase/firebase"
import {addDoc, collection} from "firebase/firestore"
import InputComp from '../component/Input'
import RoundSpinner from '../component/Loading/CircleLoad'
const EquipmentData = React.lazy(()=> import('../component/EquipmentData'))

type record = {
  Manufacturer:string , 
  id?:string,
  partName:string,
  price:number,
  type:string
}

function Equipments() {

    const [newEquip ,setEquip] = useState<record>({Manufacturer:"" , partName:"" ,price:0 , type:""});

   
  
    
    
    const createEquip = async(e:any) =>{
      const equipmentCollection = collection(firebaseDB , "equipment");
      e.preventDefault();
      try{
       const respo = await addDoc(equipmentCollection , newEquip)

       if(respo){
        setEquip({Manufacturer:"" , partName:"" ,price:0 , type:""})
       }


      }catch(err){
        console.error(err);
      }


    }

  return (
    <div>
        Equipments
        <br/>equipment display<br/><br/>
        <table>
          <thead>
            <tr>
              <th className='border-solid border-black border-2 p-2 uppercase'>part Name</th>
              <th className='border-solid border-black border-2 p-2 uppercase'>type</th>
              <th className='border-solid border-black border-2 p-2 uppercase'>Manufacturer</th>
              <th className='border-solid border-black border-2 p-2 uppercase'>price (US Dollar)</th>
            </tr>
          </thead>
            <Suspense fallback={<RoundSpinner/>}>
          <tbody >
              <EquipmentData />
          </tbody>
            </Suspense>
        </table>
        <form onSubmit={createEquip}>
          <InputComp type='text' name='partName' id='partName' value={newEquip?.partName} placeholder='part name' onChange={(e) =>{
            setEquip((equip) =>({...equip, partName: e.target.value} as record))
          }}/>
          <InputComp type='text' id='type' value={newEquip?.type} placeholder='type' onChange={(e) =>{
            setEquip((equip) =>({...equip, type: e.target.value} as record))
          }}/>
          <InputComp type='text' id='Manufacturer' value={newEquip?.Manufacturer} placeholder='manufacturer' onChange={(e) =>{
            setEquip((equip) =>({...equip, Manufacturer: e.target.value} as record))
          }}/>
          <InputComp type='number' id='price' value={newEquip?.price} placeholder='price' onChange={(e) =>{
            setEquip((equip) =>({...equip, price: parseInt(e.target.value) } as record))
          }}/>
        <Button type='submit'>create equipment</Button>
        </form>

    </div>
  )
}

export default Equipments