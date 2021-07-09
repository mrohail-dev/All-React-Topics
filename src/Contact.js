import React,{useState} from 'react';

function Contact(props){

    const [val,setVal]=useState("Rohail")
    const test=(e)=>{
        console.warn("Event Function",e.target.value)
        setVal(e.target.value)
    }
    // const[names,setName]=useState("ShahRukh Khan")
    // const[ages,setages]=useState(21)
    // useEffect(()=>{
    //     console.warn("Hello from Hooks");
    // },[ages])
    // let data='Contact Us';
    return(
        <div>
        <input type="text" value={val} onChange={test} />
        <button onClick={()=>alert(val)} >Click Me</button>
            {/* <h1>{data}</h1>
            <h1>{names}</h1>
            <h1>{ages}</h1>
            <button onClick={()=>setName("King Of BollyWood")}>Update Hooks</button>
            <button onClick={()=>setages(22)}>Update Hooks</button> */}

        </div>
    )
}
export default Contact;