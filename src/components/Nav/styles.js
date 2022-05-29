import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: var(--green-1);
  box-shadow: 0px 2px 13px -1px rgba(0, 0, 0, 0.41);

  h1 {
    width: 20%;
    display: flex;
    justify-content: center;
    color: var(--black);
    cursor: pointer;
  }
`;

export const Infos = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;

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

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
