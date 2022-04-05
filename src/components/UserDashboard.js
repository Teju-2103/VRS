import React, { Component } from 'react'

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBCardHeader, MDBCardFooter} from 'mdb-react-ui-kit';

class UserDashboard extends Component {
    render() {
      const mystyle={backgroundImage:'url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60")'
      ,
      backgroundRepeat:"no-repeat",
      height:200,width:200
      
      
      
      
  };
        return (
            
              <div >
    <MDBCard style={mystyle} >
      
      <MDBCardBody >
        
        <MDBBtn >Vehicle Insurance</MDBBtn>
      </MDBCardBody>
     
    </MDBCard>
 </div>
              
            
        )
    }

}
export default UserDashboard


