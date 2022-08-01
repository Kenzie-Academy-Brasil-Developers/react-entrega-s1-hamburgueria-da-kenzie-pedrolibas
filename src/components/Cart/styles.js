import styled from "styled-components";

export const ContainerCart = styled.div `
  width: 21rem;
  max-width: 100%;
  margin-right: 1.5rem;
  @media (max-width: 768px){
    margin: 0 auto;
  }
`

export const CartTitle = styled.div `
    background-color: var(--color-primary);
    padding: 1.375rem 0 0.813rem 1.25rem;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-white);
    }

    ul{
      width: 100%;
    }

    @media (max-width: 768px){
      width: 90%;
      margin: 0 auto;
    }
`

export const CartEmpty = styled.div `
    height: 9.875rem;
    background-color: var(--color-grey-0);
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-grey-100);
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: var(--color-grey-50);
    }
`