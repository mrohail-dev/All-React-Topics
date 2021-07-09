import React,{useState} from 'react';
import About from './About'
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUser';

function App() {
  const [namees,setNamees]=useState("CodEfied")
  return (
    <div className="App">
      <center>
      <h1>All Topics of React</h1>
      <About namees={namees} />
      <button onClick={()=>{setNamees("CodEfied <br> Solution To Your Tech Problems")}}>Update Props</button>
      <Contact />
      <Users />
      <CreateUser />
      </center>
    </div>
  );
}

export default App;
