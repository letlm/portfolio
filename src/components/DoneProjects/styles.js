import styled from "styled-components";

export const Container = styled.main`
  width: 98.8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 84vh;
`;
export const Context = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-direction: row;
  border-bottom: 2px solid black;
`;

export const Title = styled.div`
  background-color: var(--cream);
  width: 30%;
  display: flex;
  justify-content: center;
  height: 500px;
  align-items: center;

  span {
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 30px;
    color: var(--black);
  }
`;

export const Projects = styled.div`
  width: 70%;
  height: 950px;
  gap: 1vw;
  background-color: var(--cream);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 200px;
    border-radius: 2px;
    border: 2px solid var(--pink-3);
    transition: 0.3s;
  }

  figcaption {
    text-align: center;
    font-size: 22px;
    font-weight: 900;
    color: var(--black);
  }

  #efect {
    width: 300px;
    height: 204px;
  }

  #comentario {
    width: 280px;
    height: 204px;
    text-align: center;
    position: relative;
    top: -190px;
    left: 8px;
    color: var(--black);
    font-weight: 900;
    display: block;
    opacity: 0;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  #efect:hover img {
    opacity: 0.2;
  }

  #efect:hover #comentario {
    opacity: 1;
  }

  .buttons {
    width: 250px;
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
  }

  .btn {
    background-color: var(--pink-3);
    border: 2px solid var(--black);
    /* border-radius: 10px; */
    width: 100px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .techs {
    width: 40px;
    height: 40px;
    border: none;
  }
`;
