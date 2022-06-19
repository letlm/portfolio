import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 91.5vh;
  width: 100%;
  justify-content: center;
  overflow-y: scroll;

  .header {
    background-color: var(--pink-3);
    display: flex;
    align-items: center;
  }

  h1 {
    color: var(--black);
    margin-top: 10px;
  }
`;
