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
        padding: 50px 0 0 ;
        span,svg{
            color: var(--white);
        }
        span{
            display: block;
            font-size: 1.5rem;
        }
        svg{
            width: 32px;
            height: 32px;
        }
    }    

`

;
