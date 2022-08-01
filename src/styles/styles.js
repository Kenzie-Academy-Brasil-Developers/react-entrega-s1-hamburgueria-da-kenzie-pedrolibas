import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const CartValue = styled.div`
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
