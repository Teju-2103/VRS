
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = ()=>{
    return(
        
         <div>
            
            <Navbar bg="dark" variant="dark" expand="lg">
               <Container>
                  <Navbar.Brand href="/">VIS</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                     <Nav.Link  href="/">Home</Nav.Link>
                     <Nav.Link href="/about">About</Nav.Link>
                     <Nav.Link href="/User/login">Login</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         {/* {  <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
         </nav> } */}
        
         </div>
    
    )
}