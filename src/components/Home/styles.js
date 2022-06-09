import styled from "styled-components";

export const Container = styled.div`
  height: 84vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 699px) {
    flex-direction: row;
  }
`;

export const DivImg = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }

  @media (min-width: 699px) {
    height: 400px;
    width: 400px;

    img {
      width: 300px;
    }
  }

  @media (min-width: 768px) {
    height: 500px;
    width: 500px;

    img {
      width: 350px;
    }
  }
`;

export const Infos = styled.div`
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name {
    text-align: center;
    font-size: 22px;
    font-weight: 900;
  }

  .info {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  p {
    height: 42px;
    font-weight: 900;
    font-size: 23px;
    color: var(--pink-3);
    text-align: center;
  }

  @media (min-width: 699px) {
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .name {
      font-size: 22px;
      font-weight: 900;
    }

    .info {
      font-size: 18px;
      font-weight: 500;
    }

    p {
      height: 42px;
      font-weight: 900;
      font-size: 23px;
      color: var(--pink-3);
    }
  }

  @media (min-width: 768px) {
    height: 500px;
    width: 500px;

    .name {
      font-size: 24px;
    }

    .info {
      font-size: 20px;
    }

    p {
      height: 42px;

      font-size: 25px;
    }
  }
`;
