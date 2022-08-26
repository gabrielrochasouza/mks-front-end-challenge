import styled from "styled-components";

export const CartListContainer = styled.ul`
    padding: 8px 40px 30px 40px;
    overflow: auto;
    max-height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    .empty{
        text-align: center;
        font-size: 26px;
        max-width: 200px;
        margin: 20px auto;
        color: var(--white);
        svg{
            width: 40px;
            height: 40px;
        }
        span{
            display: block;
            color: var(--white);
            text-align: center;
        }
    }

`

;
