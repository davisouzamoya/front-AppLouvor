import styled, { css } from "styled-components";
import { shade } from 'polished'

export const Container = styled.div`
    position:fixed;
    margin: 0;
    padding:0;
    display: grid;
    grid-template-columns: auto auto;     
    background-color:#56CCF2;
    align-items:center;
    left:0;
    top:0;
    right:0;
    height:85px;
    z-index: 1;
`;

export const MyAnchor = styled.a`
    cursor:pointer;
`;

export const MySection = styled.section`
      height: 100%;
      width: ${({ $tamanho }) => ($tamanho ? 250 : 0)}px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: ${shade(0.2, "#56CCF2")};
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;

      a{
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #fff;
        display: block;
        transition: 0.3s;
      }

      a:hover {
        color: #f1f1f1;
      }

      .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
`