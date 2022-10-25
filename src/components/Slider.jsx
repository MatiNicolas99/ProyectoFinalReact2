
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(0vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
 `

const Img = styled.img`
    height: 80%;
    width: 100%;
`

const ImgContainer = styled.div`
 height: 100%;
 flex:1;
`

const InfoContainer = styled.div`
 flex:1;
 `
const Title = styled.div`
    font-size: 70px;
`
const Desc = styled.div`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
export const Slider = () => {


  return (
    <Container>

        <Wrapper>
            <Slide bg="f5fafd">
            <ImgContainer>
                <Img src="https://static-sevilla.abc.es/media/gurmesevilla/2013/04/pizza-margarita.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>LAS MEJORES PIZZAS</Title>
                <Desc>¡ELIGE LA FASTPIZZA QUE MAS TE GUSTE!</Desc>
                <Button>VER MÁS</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>

    </Container>
  )
}
