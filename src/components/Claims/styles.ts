import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: #000;
padding: 0 20px;
`;

export const Box = styled.div`
display: flex;
flex-wrap: wrap;
color: #000;
width: 100%;
margin: 15px;
max-width: 1120px;
  
  > div {
    width: 29%;
    @media(max-width: 768px) {
    width: 90%;
  }
    border: 1px solid #075ebd;
    padding: 20px;
    margin: 20px;
    border-radius: 3px;
  }
`;
