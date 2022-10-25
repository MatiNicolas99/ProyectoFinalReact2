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
  const value = useContext(DataContext)
  const products = value.product

  // const {pizzas} = useContext(DataContext);
  return (
    <Container>
        {products.map(item => (
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>

  )
}
