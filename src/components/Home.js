import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const mystyle={backgroundImage:'url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60")'
      ,backgroundSize:'cover',
      backgroundRepeat:"no-repeat",
      backgroundPosition:'center',
      width:'100vw',
      height:'100vh'
      
  };
        
       
    return (
      
        <div style={mystyle}>
    <h1>VIS</h1>
    </div>
    );
  }
}

export default Home


