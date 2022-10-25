import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DataContext from "../DataContext";
import { useContext } from "react";


const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;


const Buttons = styled.div`
    display: flex;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor:pointer;
    font-weight: 600;
    margin-right: 20px;
`;

const Links = styled(Link)`
    text-decoration: none;
    color: black;
`;


export const CategoryItem = ({item}) => {
    const value = useContext(DataContext)
    const addCart = value.addCart;

    const navigate = useNavigate();

    const ShowMore = () => {
        navigate(`/Product/` + item.name);
    };


  return (
    <Container>
        <Image src={item.img}/>
       <Info>
        <Title>{item.name}</Title>
        <Buttons>
            <Button onClick={ShowMore}>VER MÁS</Button>
        </Buttons>
        <Buttons>
            <Button>{`$ ${item.price}`}</Button>
        </Buttons>
        <Buttons>
            <Button onClick={() => addCart(item.id)}>AGREGAR</Button>
        </Buttons>
        </Info> 
    </Container>
  )
}
