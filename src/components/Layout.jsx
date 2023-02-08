import React from 'react'
import Nav from './Nav'
import { Container } from 'reactstrap';
const Layout =({children,cartItems,getTotalItems}) =>{
    return(
        <>
        <Nav cartItems={cartItems} getTotalItems={getTotalItems}/>
        <main>
        <Container>
          {children}
        </Container>
        
        </main>
        </>
    )
}

export default Layout;