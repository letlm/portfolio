import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  overflow-y: auto;
  height: 90vh;
  /* width: 100vw; */
  justify-content: center;
  .header {
    background-color: var(--pink-3);
  }

  h1 {
    margin-top: 10px;
    color: var(--black);
  }

  @media (min-width: 915px) {
    overflow-y: hidden;
  }
`;

export const Context = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 84vh;
`;
