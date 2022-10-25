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

export const Cart = () => {
  
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
                    <TopText>Pizzas Seleccionadass(X)</TopText>
                </TopTexts>
                <TopButton type="filled">
                    PAGAR
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
                            <Details>
                                <ProductName><b>Product</b> PIZZA </ProductName>
                                <ProductId><b>ID:</b> 203921039012 </ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>$20.000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
                            <Details>
                                <ProductName><b>Product</b> PIZZA </ProductName>
                                <ProductId><b>ID:</b> 203921039012 </ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>$20.000</ProductPrice>
                        </PriceDetail>
                    </Product>
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
                            $40.000
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>PAGAR</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}
