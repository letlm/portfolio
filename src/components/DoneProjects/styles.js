import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;

    border-bottom: 2px solid black;
  }

  .title {
    display: flex;
    justify-content: center;
    background-color: var(--white);
    width: 40%;
    font-family: sans-serif;
    letter-spacing: 1px;
    color: var(--black);
    height: 600px;
    align-items: center;
  }

  .imagens {
    height: 600px;
    width: 60%;
    background-color: var(--green-1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }
`;
