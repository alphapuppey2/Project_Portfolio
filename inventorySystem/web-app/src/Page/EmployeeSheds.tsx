import React from 'react'
import Calendar from '../component/Calendar'



function EmployeeSheds() {
  return (
    <div className='bg-violet-500 w-full flex'>
        <div className='flex items-center'>
            <Calendar />
        </div>
        <div className='employees w-full p-5'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='border-2 border-black border-solid'>Name </th>
                <th className='border-2 border-black border-solid'>Email </th>
                <th className='border-2 border-black border-solid'>position </th>
                <th className='border-2 border-black border-solid'>branch </th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-fit'>
                <td className='border-2 border-black border-solid '>LastName , First Name</td>
                <td className='border-2 border-black border-solid'>abc@abc.com</td>
                <td className='border-2 border-black border-solid'>Cashier</td>
                <td className='border-2 border-black border-solid'>Bankal</td>
              </tr>
              <tr className='h-fit'>
                <td className='border-2 border-black border-solid '>LastName , First Name</td>
                <td className='border-2 border-black border-solid'>abc@abc.com</td>
                <td className='border-2 border-black border-solid'>Cashier</td>
                <td className='border-2 border-black border-solid'>Bankal</td>
              </tr>
              <tr className='h-fit'>
                <td className='border-2 border-black border-solid '>LastName , First Name</td>
                <td className='border-2 border-black border-solid'>abc@abc.com</td>
                <td className='border-2 border-black border-solid'>Cashier</td>
                <td className='border-2 border-black border-solid'>Bankal</td>
              </tr>
              <tr className='h-fit'>
                <td className='border-2 border-black border-solid '>LastName , First Name</td>
                <td className='border-2 border-black border-solid'>abc@abc.com</td>
                <td className='border-2 border-black border-solid'>Cashier</td>
                <td className='border-2 border-black border-solid'>Bankal</td>
              </tr>
              <tr className='h-fit'>
                <td className='border-2 border-black border-solid '>LastName , First Name</td>
                <td className='border-2 border-black border-solid'>abc@abc.com</td>
                <td className='border-2 border-black border-solid'>Cashier</td>
                <td className='border-2 border-black border-solid'>Bankal</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default EmployeeSheds