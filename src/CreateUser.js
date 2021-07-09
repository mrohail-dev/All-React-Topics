import React,{useState} from 'react';

function CreateUser ()
{
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [address,setAddress]=useState("");
  function makeuser()
  {
    let data={name,age,address};
    console.warn("Called",data);
  }
    return (
      <div className="container">
        Create User <br></br>
        <input type="text" onChange={(e)=> setName(e.target.value)} name="username" value={name} />
        <br></br>
        <input type="text"  onChange={(e)=> setAge(e.target.value)} age="age" value={age} />
        <br></br>
        <input type="text"  onChange={(e)=> setAddress(e.target.value)} address="address" value={address} />
        <br></br>
        <button onClick={makeuser} >Create User</button>
      </div>
    );
}
export default CreateUser;