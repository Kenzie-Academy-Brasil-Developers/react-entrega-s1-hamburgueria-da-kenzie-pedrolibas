import styled from "styled-components";

export const ContainerHeader = styled.header `
    width: 100vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: space-between;
    background-color: var(--color-grey-0);
    img{
        width: 9.875rem;
        max-width: 100%;
        height: 2.25rem;
        margin-left: 1rem;
        cursor: pointer;
    }

    div{
        display: flex;
        align-items: center;
        width: 23.813rem;
        max-width: 100%;
        height: 3.75rem;
        margin-right: 1rem;
        background-color: var(--color-white);
        border-radius: 0.5rem;
        border: 2px solid var(--color-grey-20);

        input{
            border: none;
            height: 100%;
            border-radius: 0.5rem;
            padding: 0 1rem 0 0.5rem;
            outline: 0;
            font-weight: 400;
            font-size: 1rem;
            color: var(--color-grey-20);
        }

        button{
            background-color: var(--color-primary);
            color: var(--color-white);
            font-weight: 500;
            font-size: 0.875rem;
            border: none;
            padding: 0.688rem 1.25rem;
            border-radius: 0.5rem;
            transition: 444ms;
            cursor: pointer;

            &:hover{
                background-color: var(--color-primary-50);
            }
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        height: 8.688rem;
        justify-content: space-around;
        align-items: center;
        div{
            width: 17rem;
            display: flex;
            align-items: center;

            input{
                width: 10rem;
                padding:0;
            }
        }
    }
`