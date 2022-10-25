import { Add, Remove } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import DataContext from "../DataContext";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;   
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black":"transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 300px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
`
const Removes = styled(Remove)`
  cursor: pointer;
`

const Adds = styled(Add)`
  cursor: pointer;
`

export const Cart = () => {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = value.total;

    // const subtract = id => {
    //     cart.forEach(item => {
    //         if(item.id === id){
    //             item.amount === 1 ? item.amount = 1: item.amount -=1;
    //         }
    //         setCart([...cart])
    //     });
    // }
    // const add = id => {
    //     cart.forEach(item => {
    //         if(item.id === id){
    //             item.amount += 1;
    //         }
    //         setCart([cart])
    //     });
    // }

  return (
    <Container>
        <Wrapper>
            <Title>
                TU SELECCIÓN
            </Title>
            <Top>
                <TopButton>
                    <Link to={"/"}>
                    CONTINUAR COMPRANDO
                    </Link>
                </TopButton>
                <TopTexts>
                    <TopText>Pizzas Seleccionadass({cart.length})</TopText>
                </TopTexts>
                <TopButton type="filled">
                    PAGAR
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    {
                        cart.map(item => (
                            <Product key={item.id}>
                            <ProductDetail>
                                <Image src={item.img}/>
                                <Details>
                                    <ProductName><b>Pizza : </b> {item.name} </ProductName>
                                    <ProductId><b>ID:</b> {item.id} </ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Removes onClick={()=>subtract(item.id)}/>
                                    <ProductAmount>{item.amount}</ProductAmount>
                                    <Adds onClick={()=>add(item.id)}/>
                                </ProductAmountContainer>
                                <ProductPrice>{`$ ${item.price}`}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        
                        ))
                    }
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>
                        RESUMEN DE LA COMPRA
                    </SummaryTitle>
                    <SummaryItem type="total">
                        <SummaryItemText >
                            Total
                        </SummaryItemText>
                        <SummaryItemPrice>
                            {`$ ${total}`}
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>PAGAR</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}
