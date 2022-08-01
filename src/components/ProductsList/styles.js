import styled from "styled-components";

export const List = styled.ul`
  width: 72%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-left: 0.4rem;

  @media (max-width: 768px) {
    width: 97%;
    overflow-y: scroll;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    justify-content: flex-start;
  }

  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;
