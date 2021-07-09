import React from 'react';
class About extends React.Component{
    constructor (){
        super();
        this.state={
            name:'Rohail',
            age:21
        }
    }
    componentDidMount(){
        console.warn('Did Mount');
        console.warn('props',this.props.namees)

    }
    componentDidUpdate(){
        alert('Props Data Updated');
        console.warn('Update Props',this.props.namees)
    }
    render(){
       return(
        <div>
        <h1>About Us</h1>
        <h2>My Name is {this.state.name} and I am {this.state.age} years old</h2>
        <h3>{this.props.namees}</h3>
        <button onClick={()=>{this.setState({name:'Muhammad Rohail Naveed'})}}>Update State</button>
       </div>
       )
    }
}
export default About;