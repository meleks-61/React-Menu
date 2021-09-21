import styled from "styled-components"
// import { useState } from "react";



const Container=styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 30px;
`;
const Wrapper=styled.div`
display:flex;
width: 50%;

`;
const Image=styled.img`
width:30%;
height: 175px;
border:0.25rem solid black;
border-radius: 10px;
object-fit:cover;
margin-left:10px;
margin-bottom:10px;`;
const Content=styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
`;
const Title=styled.div`
display:flex;
/* flex-direction: row; */
justify-content:space-between;
border-bottom:2px solid gray;`;
const Subtitle=styled.h4`
cursor: pointer;
`;
const Price = styled.p``;
const Desc=styled.p`
margin-top:20px;`;





function Menu ({menuItems,changeVisible, visible}){
   




    return(
        <Container >
            {menuItems.map((items)=>{
                return(
                    <Wrapper key={items.id}>
                <Image src={items.img}></Image>
                <Content>
                    <Title>
                    <Subtitle onClick={changeVisible}  >{items.title}</Subtitle>
                    <Price>{items.price}</Price>
                    </Title>
                   {visible && <Desc>{items.desc}</Desc>}
                    {/* <Desc style={ visible ? {display:"none"} : null}>{items.desc}</Desc> */}
                    

                </Content>






                    </Wrapper>




                )





            }
            
            
            
            )}

        </Container>



    )
}
export default Menu;