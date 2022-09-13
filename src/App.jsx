import { useState, useEffect } from "react";

function App(props) {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("React Hooks");
  let [films, setFilms] = useState([]);

  async function getFilms() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let data = await res.json();
    setFilms(data);
  }

  useEffect(() => {
    // call the studio ghibli api for films
    getFilms();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Title: {title} and Click Count: {count}
        </h1>
        <hr />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <hr />
        <button onClick={(e) => setCount(count + 1)}>Update Count</button>
        <hr />
        <ul>
          {films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;






// import React, { Component } from "react";
// import FilmsList from "./components/filmsList";
// // import React from "react";

// class App extends React.Component {
// constructor(props)
// { super (props)

//   this.state ={
//     list: ["ready","set","GO"],
//     text: "",
//   }; 
//  this.addItem=this.addItem.bind(this)
// }
// addItem(){
//   let newItem=[...this.state.list,this.state.text]
//   this.setState({list: newItem,text:""})
// }
 
//   render() {
//     // let listItem=this.state.list.map((e,idx)=>(
//     //   <li >{e}</li>
//     // ))))
//     return (
//       <div className="App">
//         <div className="App-header">
//         <h1>Hello World</h1>
//         <input 
//         type="text" 
//         name="newTask"
//         id="newTask"
//         value={this.state.text}
//         onChange={(event)=>this.setState({text:event.target.value})}
//         />
//           <button onClick={this.addItem}>add</button>
//         <ul>
//           {this.state.list.map((e ,idx) => (<li key={idx}>{e}</li>))}
//         </ul>
//         <FilmsList />    
//         </div>
//       </div>);

// }
// }
// export default App;
                          