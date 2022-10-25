import styled from "styled-components"
import { useParams } from 'react-router-dom' ;
import { Add, Remove } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import DataContext from "../DataContext";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc= styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  
`;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: lightgray;
  }
`;

const Removes = styled(Remove)`
  cursor: pointer;
`

const Adds = styled(Add)`
  cursor: pointer;
`
const Ingredients = styled.ul`
  
`
const Ingredient = styled.li`
  list-style: none;
  margin-bottom: 20px;
`
const PizzaImg = styled.img`
  width: 20px;
  margin-right: 10px;
`

export const Product = () => {

  const {pizzas, selectedPizza, setSelectedPizza, setTotalPrice, totalPrice} = useContext(DataContext);
  const [pizza, setPizza] = useState([]);
  let params = useParams();

  const selectItem = (name) => {
    const filterProduct = pizzas.filter(pizza => pizza.name === name);
    setPizza(filterProduct);
  };

  useEffect(() => {
    selectItem(params.productitem);
 }, [params.productitem])
  
//  const detail = (pizzas, setTotal) => {
//   let total = 0;
//   let products = [];

//   for (const product of pizzas){
//     console.log("producto: ", product["id"]);
    
//     const productFound = products.filter((p)=>p["id"] === product["id"]);
//     console.log(productFound);
//     if (productFound.length === 0){
//       const newProduct = {...product, cantidad: 1}
//       products.push(newProduct);
//       console.log(products);
//     }else {
      
//       productFound[0].cantidad += 1;
//       console.log(productFound);
      
//     }
//     total += product.price;
//     setTotal(total);
//   }
//   return {
//     "products": products,
//     "total": total,
//   }
//  };

const detail = (pizzas, selectedPizza, setSelectedPizza, setTotalPrice, totalPrice) => {

  let total = totalPrice;
  setSelectedPizza([pizzas,...selectedPizza])
  for (const p of selectedPizza) {
    console.log(p[0].price)
    total += p[0].price;
    console.log(total)
    setTotalPrice(total);
  }
  
} 
return (
    <Container>
      {pizza.map(p => (
              <Wrapper key={p.id}>
              <ImgContainer>
                <Image src={p.img} />
              </ImgContainer >
              <InfoContainer>
                <Title>{p.name}</Title>
                <Desc>
                  {p.desc}
                </Desc>
                <Ingredients>
                  <Ingredient><PizzaImg src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>{p.ingredients[0]}</Ingredient>
                  <Ingredient><PizzaImg src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>{p.ingredients[1]}</Ingredient>
                  <Ingredient><PizzaImg src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>{p.ingredients[2]}</Ingredient>
                  <Ingredient><PizzaImg src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>{p.ingredients[3]}</Ingredient>
                </Ingredients>
                <Price>{`$${p.price}`}</Price>
                <AddContainer>
                  <Button onClick={() => detail(pizza, selectedPizza, setSelectedPizza, setTotalPrice, totalPrice)}>AGREGAR AL CARRITO</Button>
                </AddContainer>
              </InfoContainer>
            </Wrapper>
      ))}
    </Container>
  );
};
