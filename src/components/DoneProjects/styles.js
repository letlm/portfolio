import styled from "styled-components";

export const Container = styled.main`
  width: 98.8vw;
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Context = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 2vh;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;

export const Projects = styled.div`
  height: 350px;
  width: 270px;
  border-radius: 8px;
  background: var(--white);
  border: 2px solid var(--pink-3);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    box-shadow: 10px 10px 69px -2px rgba(186, 143, 78, 0.8);
  }
`;

export const Figure = styled.figure`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 240px;
    height: 180px;
    border-radius: 8px;
    /* border: 1px solid var(--black); */
    transition: 0.3s;
  }

  figcaption {
    /* margin-right: 70px; */
    margin-top: 5px;
    font-size: 20px;
    font-weight: 900;
    color: var(--pink-3);
    text-shadow: 8ex;
  }

  #efect {
    width: 240px;
    height: 180px;
  }

  #comentario {
    width: 235px;
    height: 180px;
    text-align: center;
    position: relative;
    top: -185px;
    left: 4px;
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
    width: 240px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }

  /* .btn {
    background-color: var(--pink-3);
    border: 2px solid var(--black);
    font-family: "Karma", serif;
    font-weight: 500;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .button {
    border: 1px solid var(--black);
    color: var(--white);
    border-radius: 4px;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    font-family: "Karma", serif;
    background: var(--black);
    transition: 0.2s;
  }

  .button:hover {
    color: var(--black);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--pink-3);
    box-shadow: 0.25rem 0.25rem var(--black);
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }

  .techsDiv {
    /* margin-right: 86px; */
    display: flex;
    width: 130px;
    justify-content: flex-start;
  }

  .techs {
    width: 35px;
    height: 35px;
    border: none;
    margin-right: 5px;
  }
`;
