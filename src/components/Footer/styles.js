import styled from "styled-components";

export const Container = styled.footer`
  height: 8vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--pink-3);
  box-shadow: 0px -3px 13px -1px rgba(0, 0, 0, 0.41);
  z-index: 9;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    color: var(--black);
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Contact = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  .linkedin {
    width: 23px;
  }
  .github {
    width: 24px;
  }

  .gmail {
    width: 33px;
  }
`;
