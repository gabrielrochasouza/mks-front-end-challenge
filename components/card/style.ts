import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: var(--white);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 227.5px;
    height: 305px;
    display: flex;
    margin-bottom: 9px;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    figure{
        width: 100%;
        height: 138px;
        padding: 12px 0 0;
        overflow: hidden;
        cursor: pointer;
        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
            transition: 500ms;
            :hover{
                transform: scale(1.2);
                transition: 500ms;
            }
        }
        
    }
    button{
        background-color: var(--blue);
        width: 100%;
        height: 32px;
        text-align: center;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        svg{
            font-size: 14px;
            
        }
        span{
            color: var(--white);
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;

        }
    }
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 12px 5px 14px ;
        gap: 8px;
        span{
            background: #373737;
            border-radius: 5px;
            color: var(--white);
            font-weight: 700;
            font-size: 15px;
            line-height: 15px;
            display: inline-block;
            padding: 4px 6px;
        }
    }
    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2C2C2C;
        margin: 14px 0 0;
    }
    p{
        padding: 0px 12px 0px 14px  ;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
    }

`
