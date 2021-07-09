import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
function Users(){

    const [users,setUsers]=useState([
        {name:"Rohail",age:'21',designation:"Sofware Engineer"},
        {name:"Asher",age:'21',designation:"MERN STACK DEVELOPER"},
        {name:"Zeeshan",age:'23',designation:"FRONTEND DEVELOPER"},
        {name:"Asim",age:'22',designation:"DATA SCIENCETIST"},
        {name:"Daniyal",age:'21',designation:"REACT DEVELOPER"}

    ])
    return (
      <div>
        <h1>Users</h1>
        {
          users.length == 5 ? (
            <div>The length is 5</div>
          ) : (
            <div>The length is not correct</div>
          )
          /* {users.map((item,i)=>
            <div key={i}>
            <li>{item.name}</li>
            <span>{item.age}</span>
            </div>
            )} */
        }
       <div className="container">
       <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
       </div>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </div>
    );
}

export default Users;