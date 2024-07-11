import React from 'react'

const UserData = ({user}) => {
  console.log("userDataaa", user);
  return (
    <div className='border border-black p-4'>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>DOB: {user.dob}</div>
      <div>Aadhar No: {user.aadharNo}</div>
      <div>Phone No: {user.mobileNo}</div> 
    </div>
  )
}

export default UserData