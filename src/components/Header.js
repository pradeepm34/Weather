import React from 'react';

const Header = (props)=>(
  <div>
  <div style={{float:'left'}}> 
      <p>Clever title</p>
      </div>
      <div style={{float:'right'}}>
      <form onSubmit={props.click}>
      <input type = "text" name="search" placeholder="St.Georgia, Utah" />
      <button >Get Weather</button>
      </form>     
      </div>
</div>
);

export default Header;


  //  // 5 day weather api
  //  const getWeather =async ()=>{
  //   const appid="d3b9572aadf918a6a593d8b4f1e55ac8";
  //   const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${text}-NAME&type=accurate&appid=${appid}&cnt=5`,{})
  //   if(response.status===200){
  //        const data =await response.json()
  //        console.log(data);
  //         // return  data.find((country)=>country.id===id)        
  //   }else{
  //       throw new Error('failed')
  //   }
  //   }
  //   getWeather().then((data)=>{
  //      //  console.log(data)
  //   }).catch((err)=>{
  //    console.log(err)
  //   })











// export default class Header extends React.Component{
//   // handleGetText=(e)=>{
//   //    e.preventDefault();
//   //    const text = e.target.elements.search.value;
//   //    console.log(text);
//   //    e.target.elements.search.value='';

//   //   const getbody =async ()=>{
//   //   const appid="d3b9572aadf918a6a593d8b4f1e55ac8";
//   //   const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text},us&appid=d3b9572aadf918a6a593d8b4f1e55ac8`,{})
//   //   if(response.status===200){
//   //       const data =await response.json()
//   //       console.log(data.weather);
//   //        // return  data.find((country)=>country.id===id)        
//   //   }else{
//   //       throw new Error('failed')
//   //   }
//   //   }
//   //   getbody().then((data)=>{
//   //   console.log(data)
//   //   }).catch((err)=>{
//   //   console.log(err)
//   //   })
//   //   };
//     render(){
//       const style={
//         backgroundColor : 'blue'
//       }
//       return(
//         <div style ={style}>         
//         <div style={{float:'left'}}> 
//         <p>Clever title</p>
//         </div>
//         <div style={{float:'right'}}>
//         <form onSubmit={this.props.click}>
//         <input type = "text" name="search" placeholder="St.Georgia, Utah" />
//         <button >Get Weather</button>
//         </form>     
//         </div>
//       </div>
//       );
//     }
  
// };



