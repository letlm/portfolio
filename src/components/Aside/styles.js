import styled from "styled-components";

export const AsideComp = styled.aside`
  width: 100px;
  display: flex;
  justify-content: center;

  .btnOpen {
    background: transparent;
    border: none;

    .imgMenu {
      width: 55px;
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;
    }

    .imgMenu:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

export const Box = styled.div`
  width: 160px;
  height: 100vh;
  background-color: var(--pink-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 25px;
    margin-top: 30px;
    cursor: pointer;
  }

  nav {
    width: 68px;
    height: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .btnNav {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Karma", serif;
    font-weight: 700;
    text-transform: uppercase;
  }

  .btnClose {
    width: 35px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100px;
  background-color: var(--black);
`;
