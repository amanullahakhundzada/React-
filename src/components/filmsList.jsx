import { Component } from "react";

    class FilmsList extends Component {
        constructor(props){
            super(props);
            this.state={
                list:[],
                isLoading:true,
            }
        }
        getFilms(){
            fetch("https://ghibliapi.herokuapp.com/films")
            .then((res)=>res.json())
            .then((list)=>this.setState({list, isLoading:false}))
            .catch((err)=> console.error());
        }
        componentDidMount(){
            console.log("App- Created")
            this.getFilms();
        }
        // componentDidUpdate(){
        //     console.log("App- Update")
            
        // }
        // componentDidUnmount(){
        //     console.log("App- Unmount")
        
        // }
        
        render() {
            if(this.state.isLoading){
                return <p>Loading ... </p>
            }else
          return (<ul>
            {this.state.list.map((film)=>(<li key={film.id}>{film.title}</li>))}
          </ul>)
        }

      }
      export default FilmsList;
