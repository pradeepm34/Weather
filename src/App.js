import React, { Component } from 'react';
import Header from "./components/Header";
import Weather from "./components/Weather";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      weather : []
    };
  }
  handleGetText=(e)=>{
    e.preventDefault();
    const text = e.target.elements.search.value;
    console.log(text);
    e.target.elements.search.value='';
    const getbody =async ()=>{
    const appid="d3b9572aadf918a6a593d8b4f1e55ac8";
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text},us&appid=${appid}`,{})
    if(response.status===200){
       const data =await response.json()
       return data;
      //  console.log(data);
        // return  data.find((country)=>country.id===id)        
     }else{
      throw new Error('failed')
     }
     }
     getbody().then((data)=>{
       const weather1 = data.weather;
       this.setState({
        //  weather: this.state.weather.concat(weather1)
        weather:weather1
       });
      console.log(weather1)
     }).catch((err)=>{
     console.log(err)
     })  
    }; 

     render() {
       return (
       <div  className="App">
        <Header  
         click = {this.handleGetText}/>
         <br/>
         <br/>
         <br/>
         <Weather climate = {this.state.weather.map((day)=>(
           <p key={day.id}>{day.description}</p>
         ))}/>
      </div>
    );
  };
};

export default App; 


