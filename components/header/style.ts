import styled from "styled-components";

export const HeaderComponent = styled.header`
    height: 101px;
    background-color: var(--blue);
    padding: 0 30px;
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 40;
    
    >div{
        justify-content: space-between;
        display: flex;
        align-items: center;
        max-width: 1210px;
        margin: 0 auto;
        width: 100%;
    }
    h1{
        span:nth-child(1){
            color: var(--white);
            font-weight: 600;
            font-size: 40px;
            line-height: 19px;
        }
        span:nth-child(2){
            color: var(--white);
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 19px;
        }
        @media (max-width:350px) {
            span:nth-child(1){
                font-size: 34px;
            }
            span:nth-child(2){
                font-size: 17px;
            }
        }
    }
    >div >div{
        background-color: var(--white);
        color: var(--black);
        height: 45px;
        border-radius: 8px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
        span{
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
        }
    }
`
