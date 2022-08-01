import styled from "styled-components";

export const Card = styled.li `
  width: 18.75rem;
  height: 21.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid var(--color-grey-20);
  border-radius: 0.313rem;

  div {
    width: 100%;
    height: 9.375rem;
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: center;
  }

  div + div {
    width: 90%;
    height: 80%;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    background-color: var(--color-white);

  }

  img {
    width: 11.063rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-grey-100);
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-50);
  }

  strong {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  button {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-white);
    background-color: var(--color-primary);
    border: none;
    padding: 0.688rem 1.25rem;
    border-radius: 0.5rem;
    transition: 444ms;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-50);
    }
  }
`;