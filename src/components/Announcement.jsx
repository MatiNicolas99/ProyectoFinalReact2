import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-content: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`

export const Announcement = () => {
  return (
    <Container>Las mejores pizzas, los mejores precios, en menos de 50 min en tu casa</Container>
  )
}
