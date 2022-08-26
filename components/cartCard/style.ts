import styled from "styled-components";

export const CartCardContainer = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95px;
  padding: 14px 15px 14px 12px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  justify-content: space-between;
  position: relative;
  animation: scaleUp 600ms;
  .card-title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: var(--grey);
    max-width: 113px;
    flex: 1;
    padding:  0 4px 0 8px ;


    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

  }
  .price {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--black);
  }
  figure {
    width: 50px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .close-btn {
    background-color: var(--black);
    position: absolute;
    top: -7px;
    cursor: pointer;
    right: -7px;
    width: 18px;
    height: 18px;
    font-size: 10px;
    text-align: center;
    border-radius: 50%;
    padding: 3px 0 4px;
  }
  .qtd-box {
    min-width:50px;
    margin: 0 8px 0 0;
    .qtd {
      color: var(--black);
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 6px;
    }
    .qtd-controller {
      background: #ffffff;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 2px;
      cursor: pointer;
      span {
        display: inline-block;
        padding: 0 4px 0 4px;
        font-weight: 400;
        display: inline-block;
        font-size: 13px;
        text-align: center;
        line-height: 10px;
        color: var(--black);
      }
      .qtd-num{
        border-right: 1px solid  #BFBFBF;
        border-left: 1px solid  #BFBFBF;
        display: inline-block;
        
      }
      .controller{
        font-size: 15px;
        display: inline-block;
        transition: 1s all;
        :hover{
            transform: scale(1.6);
            transition: 1s all;
            color: var(--blue);
            border-radius: 50%;
        }
      }
    }
  }
`;
