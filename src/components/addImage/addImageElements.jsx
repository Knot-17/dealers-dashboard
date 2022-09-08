import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: var(--second-bg);
    box-shadow: var(--box-shadow-dark);
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--txt-color);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
`

export const CloseButton = styled.button`
    border-radius: 5px;
    background-color: var(--second-color);
    cursor: pointer;
    color: var(--second-bg);
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
`

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    `

export const ButtonContainer = styled.button`
    color: var(--second-bg);
    background-color: var(--main-bg);
    border: 2px solid var(--main-bg);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 200px;   
    margin-bottom: 10px;
    &:hover{
        background-color: var(--main-bg-hover);
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 50%;
    height: 100%;
    row-gap: 2rem;
    border-radius: 5px;
    margin-left: 10px;
`