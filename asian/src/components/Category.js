import styled from "styled-components"
const Container = styled.div``;
const Button=styled.button`
margin:5px;
width:100px;
height:50px;
border-radius: 10px;
border-style: hidden;
cursor: pointer;
`;




const Category=({categoryList,changeList})=>{
    return(
        <Container>
            {categoryList.map((items)=>
            <Button onClick={()=>changeList(items)}>{items}</Button>
            
            
            
            
            )}




        </Container>

    )
}
export default Category;