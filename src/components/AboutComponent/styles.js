import styled, { keyframes } from "styled-components";

const appearLeft = keyframes`
  0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const appearPhoto = keyframes`
  0% {
		opacity: 0;
		transform: rotate(-540deg) scale(0);
	}

	100% {
		opacity: 1;
		transform: rotate(0) scale(1);
	}
`;

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* overflow-y: auto; */

  @media (min-width: 915px) {
    flex-direction: row;
    margin: auto;
    height: 400px;
  }
`;

export const Photo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  height: 300px;
  align-items: center;
  text-align: center;
  border: 2px solid var(--pink-3);
  animation: ${appearLeft} 1s ease 0s 1 normal none;

  img {
    width: 45%;
    height: 250px;
    border: 2px solid var(--black);
    border-radius: 8px;
    margin-left: 5px;
    animation: ${appearPhoto} 2s ease 0s 1 normal none;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 13px;
      width: 90%;
      line-height: 15px;
      font-family: "Karma" serif;
      font-weight: 600;
      color: var(--black);
    }

    span {
      width: 65%;
      font-size: 14px;
      color: var(--pink-3);
      font-weight: 500;
      margin-top: 10px;
    }

    .imgs {
      display: flex;
      flex-direction: row;
      display: flex;
      align-items: center;

      img {
        border: none;
        width: 40px;
        height: 60px;
      }

      .codewars {
        width: 40px;
        height: 40px;
      }
    }
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
      margin-bottom: -10px;
    }
  }

  @media (min-width: 500px) {
    img {
      height: 290px;
      width: 50%;
    }

    .text {
      h4 {
        font-size: 16px;
        line-height: 22px;
      }

      span {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 915px) {
    width: 280px;

    flex-direction: column;

    height: 555px;
    align-items: center;
    text-align: center;

    img {
      margin-top: 10px;
      width: 240px;
    }

    .text {
      h4 {
        width: 240px;
        margin-top: 10px;
      }

      span {
        margin-bottom: -10px;
      }
    }
  }
`;

export const Infos = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  animation: ${appearLeft} 1s ease 0s 1 normal none;

  div {
    margin-left: 00px;
  }

  p {
    color: var(--black);
    text-align: justify;
  }

  @media (min-width: 915px) {
    width: 650px;

    div {
      margin-left: 20px;
    }
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
