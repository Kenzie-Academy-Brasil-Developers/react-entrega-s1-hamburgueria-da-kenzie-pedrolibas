import styled from "styled-components";

export const CartValue = styled.div `
  width: 100%;
  height: 8.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid var(--color-grey-20);

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    background-color: var(--color-white);
    h3 {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--color-grey-100);
    }

    span {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--color-grey-50);
    }
  }

  button {
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-grey-50);
    width: 21.438rem;
    max-width: 100%;
    height: 3.75rem;
    border: none;
    background-color: var(--color-grey-20);
    cursor: pointer;
    transition: 444ms;

    &:hover {
      background-color: var(--color-grey-50);
      color: var(--color-grey-20);
    }
  }
`;