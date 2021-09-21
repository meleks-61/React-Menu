import {useState} from "react";
import Header from "./components/Header";
import styled from "styled-components"
import Category from "./components/Category";
import Menu from "./components/Menu";
import {data} from "./components/Data"


const categoryList=["All",...new Set(data.map((item)=>item.category))]

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color: orange;
`;
 



function App() {
  const [menuItems, setMenuItems] =useState(data)
  


  const changeList=(category)=>{
    category==="All"? setMenuItems(data)
    :setMenuItems(data.filter((items)=>items.category===category));
   
  }


  return (

    <Container>
      <Header/>
      <Category changeList={changeList} categoryList={categoryList}/>
      <Menu menuItems={menuItems}  />



    </Container>
    
  );
}

export default App;
