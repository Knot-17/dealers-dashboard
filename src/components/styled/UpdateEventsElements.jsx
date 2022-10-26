import styled from "styled-components";
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 70vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-left: 15px;
  border: solid;
  border-right-color: #01bf71;
`;

export const ReceiptHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #fff;
  padding: 10px;
  margin: 20px;
`;

export const ReceiptBody = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  min-width: 500px;
  height: 100%;
  background-color: #fff;
`;

export const ReceiptFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  text-align: center;
`;

export const InputContainerDouble = styled.div`
  display: grid;
  grid-template-columns: 47% 47%;
  justify-content: space-between;
  position: relative;
  flex: 1;
`;

export const InputContainerFull = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  flex: 1;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 5px;
  border-bottom: solid 1px;
  border-bottom-color: #01bf71;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  align-items: center;
`;
export const Label = styled.div`
  font-weight: bold;
  height: 1.5rem;
  margin-top: 3px;
  color: #717171;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  line-height: 2rem;
`;
export const ButtonElementEdit = styled.button`
  color: #fff;
  background-color: #cd4747;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff7777;
  }
`;
export const ButtonElement = styled.button`
  color: #fff;
  background-color: #01bf71;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #068550;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-left: 10px;
`;
