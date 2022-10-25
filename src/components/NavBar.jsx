import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
 flex: 1; 
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`
const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
`
const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
`
const Input = styled.input`
  border: none;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

export const NavBar = () => {
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>ES</Language>
        <SearchContainer>
          <Input/>
          <Search style={{color: "gray", fontSize: "16px"}}/>
        </SearchContainer>
      </Left>
      <Center><Logo><Link to={"/"} style={{color: "black", textDecoration: "none"}}>FastPizza.</Link></Logo></Center>
      <Right>
        <MenuItem>Registrarse</MenuItem>  
        <MenuItem>Iniciar Sesión</MenuItem>
        <MenuItem>
          <Badge badgeContent={0} overlap="rectangular" color="primary">
            <Link to={"/Cart"}>
              <ShoppingCartOutlined color="action" />
            </Link>
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
  )
}
