import React , {useEffect, useState } from 'react'
import {firebaseDB} from "../configFirebase/firebase"
import {collection , getDocs, query} from "firebase/firestore"



type record = {
    Manufacturer:string , 
    id?:string,
    partName:string,
    price:number,
    type:string
  }
  

function EquipmentData() {
    const [equipement,getRecord] = useState<Array<record>>([]);
    
    useEffect(()=>{
      
      const fetchData = async()=>{
          const equipmentCollection = collection(firebaseDB , "equipment");
          
          const equipmentQuery = query(equipmentCollection);
          const querySnapShot = await getDocs(equipmentQuery);
          const fetchedData : Array<record> = [];
  
  
          
          querySnapShot.forEach((doc) =>{
            fetchedData.push({id:doc.id , ...doc.data()} as record)
          })
          // console.table(fetchedData);
          getRecord(fetchedData);
        }
        fetchData();
      },[equipement])
  return (
    <>
    {equipement && equipement.map((dat , i) =>{
        return(
          <tr key={i} >
            <td className='border-solid border-black border-2 p-2'>{dat.partName}</td>
            <td className='border-solid border-black border-2 p-2'>{dat.type}</td>
            <td className='border-solid border-black border-2 p-2'>{dat.Manufacturer}</td>
            <td className='border-solid border-black border-2 p-2'>{dat.price}</td>
          </tr>
        )
      })}
    </>
  )
}

export default EquipmentData