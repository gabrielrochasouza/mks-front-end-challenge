import styled from "styled-components";

export const SideCartContainer = styled.aside`
    background-color: var(--blue);
    color: var(--white);
    position: fixed;
    right: ${(props:{open:boolean})=>props.open ? "0" : "-100%"};
    top: 0;
    min-height:100vh ;
    height: 100%;
    max-width: 486px;
    width: 100%;
    transition: 1000ms;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: flex;
    flex-direction: column;
    .sidecart-header__closebtn{
        width: 38px;
        height: 38px;
        color: var(--white);
        text-align:center;
        padding: 10px 0 8px;
        font-weight: 400;
        font-size: 28px;
        line-height: 15px;
        background-color: var(--black);
        border-radius: 50%;
        cursor: pointer;
    }
    section {
        display: flex;
        justify-content: space-between;
        padding: 34px 47px;
        span{
            font-weight: 700;
            font-size: 28px;
            line-height: 15px;
            color: var(--white);
        }
    }
    ul{
        flex: 1;
    }
    header{
        padding: 34px 47px;
        display: flex;
        justify-content: space-between;
        h2{
            font-weight: 700;
            font-size: 27px;
            line-height: 33px;
            color: #FFFFFF;
            max-width: 180px;
        }
        span{
            width: 38px;
            height: 38px;
            color: var(--white);
            text-align:center;
            padding: 10px 0 8px;
            font-weight: 400;
            font-size: 28px;
            line-height: 15px;
            background-color: var(--black);
            border-radius: 50%;
            cursor: pointer;
        }
    }
    div{

        button{
            padding: 39px 0 43px;
            background-color: var(--black);
            outline: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
            color: var(--white);
            text-align: center;
            font-weight: 700;
            font-size: 28px;
            line-height: 15px;
            border: 0;
        }
    }
`
