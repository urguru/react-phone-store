import styled from 'styled-components'

export const ButtonContainer = styled.button`
         text-transform: capitalize;
         font-size: 1.4rem;
         background: transparent;
         border: 0.05rem solid var(--lightBlue);
         border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
         color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};;
         border-radius: 0.5rem;
         cursor: pointer;
         padding: 0.2rem 0.5rem 0.4rem 0.5rem;
         margin: 0.2rem 0.5rem 0.2rem 0;
         transition: all 0.5 ease-in-out;
         &:hover {
           background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
           color: ${props => props.cart ? "var(--lightYellow)" : "var(--mainBlue)"};
         }
         &:focus {
           outline: none;
         }
       `;

export const ButtonContainerCart = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color:red;
  color: red;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem 0.4rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: red;
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
