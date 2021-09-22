import styled from "styled-components"
import Menu from "./Menu";
// import { useState } from "react";



const Container=styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 30px;
`;








function MenuList ({menuItems}){
   




    return(
        <Container >
            {menuItems.map((items)=>(


         <Menu items={items} key={items.id} />                
              





            )
            
            
            
            )}

        </Container>



    )
}
export default MenuList;