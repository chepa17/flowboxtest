import styled from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

export const MenuButton = styled.button<{active: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 3px;
  margin-top: 100px;
  background-color: ${props => (props.active ? '#dd7973' : '#ffbd03')};
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    font-weight: 600;
  }
`