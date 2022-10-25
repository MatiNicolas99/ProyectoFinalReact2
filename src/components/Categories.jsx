import { useContext } from "react";
import styled from "styled-components"
import DataContext from "../DataContext";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;



export const Categories = () => {
  const {pizzas} = useContext(DataContext);
  return (
    <Container>
        {pizzas.map(item => (
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>
  )
}
