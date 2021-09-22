 import styled from "styled-components";
 import {useState} from "react";

 const Container=styled.div`
 display:flex;
 width: 50%;
 ;`;
 const Image=styled.img`
 width:50%;
 height: 175px;
border:0.25rem solid black;
border-radius: 10px;
object-fit:cover;
margin-left:10px;
margin-bottom:10px;`;

 const Content= styled.div`
 display: flex;
flex-direction: column;
padding-left: 10px;`;

 const Title=styled.div`
 display:flex;
/* flex-direction: row; */
justify-content:space-between;
border-bottom:2px solid gray;`;

 const Subtitle=styled.h4`
 cursor: pointer;`;
 const Price=styled.p``;
 const Desc=styled.p`
 margin-top:20px;`;



 const Menu=({items})=>{

    const[visible,setVisible]=useState(false)
  
     return(
         <Container>

             <Image src={items.img}></Image>
             <Content>

                 <Title>
                     <Subtitle onClick={()=>setVisible(!visible)}>{items.title}</Subtitle>
                     <Price>{items.price}</Price>

                 </Title>
                 {visible && <Desc>{items.desc}</Desc>}
                   

                 



             </Content>








         </Container>
       



     )

 }
 export default Menu;