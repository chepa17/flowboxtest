import styled from "styled-components";

export const ImagesCardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1280px;
`

export const ImagesCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: start;
  padding: 25px 5px;
  background-color: #61dafb;
`

export const ImagesCardPlate = styled.img`
  width: 180px;
  height: 180px;
  border: 1px solid black;
`

export const ImagesCardDescription = styled.div`
  margin-top: 10px;
  width: 172px;
  padding: 5px;
`

export const ImagesCardText = styled.span`
  background-color: white;
  font-size: 14px;
  line-height: 19px;
`