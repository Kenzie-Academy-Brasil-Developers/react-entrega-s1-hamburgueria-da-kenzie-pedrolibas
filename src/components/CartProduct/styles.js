import styled from "styled-components";

export const CartCard = styled.li `
    width: 100%;
    height: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 0.5rem 0 0.5rem 0;

    img{
        width: 4.375rem;
        max-width: 100%;
        background-color: var(--color-grey-0);
    }

    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2{
            font-weight: 700;
            font-size: 0.875rem;
            color: var(--color-grey-100);
        }

        span{
            font-weight: 400;
            font-size: 0.75rem;
            color: var(--color-grey-50);
        }
    }

    button{
        background-color: transparent;
        border: none;
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--color-grey-50);
        cursor: pointer;
        transition: 444ms;

        &:hover{
            color: var(--color-negative);
        }
    }
`