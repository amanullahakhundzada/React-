import React, { Component } from "react";
// import React from "react";

class App extends React.Component {
constructor(props)
{ super (props)

  this.state ={
    list: ["ready","set","GO"],
    text: "",
  }; 
 this.addItem=this.addItem.bind(this)
}
addItem(){
  let newItem=[...this.state.list,this.state.text]
  this.setState({list: newItem,text:""})
}
  render() {
    // let listItem=this.state.list.map((e,idx)=>(
    //   <li >{e}</li>
    // ))
    return (
      <div className="App">
        <div className="App-header">
        <h1>Hello World</h1>
        <input 
        type="text" 
        name="newTask"
        id="newTask"
        value={this.state.text}
        onChange={(event)=>this.setState({text:event.target.value})}
        />
          <button onClick={this.addItem}>add</button>
        <ul>
          {this.state.list.map((e ,idx) => (<li key={idx}>{e}</li>))}
        </ul>
        </div>
      </div>
    );
  }
}
export default App;
                          