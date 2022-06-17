import styled from "styled-components";

export const Container = styled.div`
  height: 64vh;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const Photo = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 555px;
  align-items: center;
  text-align: center;
  border: 2px solid var(--pink-3);

  h4 {
    width: 240px;
    margin-top: 10px;
    line-height: 22px;
    font-family: "Karma" serif;
    font-weight: 600;
    color: var(--black);
  }

  img {
    margin-top: 10px;
    width: 240px;
    border: 2px solid var(--black);
    border-radius: 8px;
  }

  span {
    color: var(--pink-3);
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .plus {
      border: none;
      height: 28px;
      width: 118px;
      border-radius: 0px;
    }
  }
`;

export const Infos = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;

  div {
    margin-left: 20px;
  }

  p {
    color: var(--black);
    text-align: justify;
  }
`;

export const Context = styled.div`
  h2 {
    color: var(--pink-3);
  }
`;

export const Plus = styled.div`
  margin-top: 15px;

  span {
    font-size: 18px;
    font-weight: 700;
    color: var(--pink-3);
  }

  img {
    height: 28px;
    width: 128px;
    border: none;
    margin-right: 5px;
  }
`;
