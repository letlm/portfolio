import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  .containerProject {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 500px;
    border-bottom: 2px solid black;
  }

  .title {
    display: flex;
    justify-content: center;
    background-color: var(--cream);
    width: 40%;
    font-family: sans-serif;
    letter-spacing: 1px;
    color: var(--black);
    height: 500px;
    align-items: center;
  }

  .imagens {
    height: 500px;
    width: 60%;
    background-color: var(--pink-2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }
`;
