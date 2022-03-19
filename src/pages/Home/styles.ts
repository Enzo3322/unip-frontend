import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  background-color: #fbfbfb;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50%;
  height: 100vh;
  @media(max-width: 768px) {
  max-width: 100%;
  
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 20px 0;
    width: 300px;
    text-align: center;


    a {
      color: #222;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#222")};
      }
    }
  }

  > a {
    color: #075ebd;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, "#075ebd")};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: #075ebd;
  background-size: cover;
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  align-items: center;
  		h1 {
			color: #fbfbfb;
			font-size: 2.2rem;
			max-width: 600px;
			line-height: 35px;
			margin-bottom: 20px;
      font-weight: bold;
		}
		p {
			max-width: 600px;
		}
`;
