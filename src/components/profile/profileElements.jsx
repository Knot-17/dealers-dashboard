import styled from 'styled-components';


export const MainContainer = styled.div`
    display:grid;
    grid-template-rows: 40% 60%;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: var(--second-bg);
    margin-left: 5px;
    margin-top: 80px;
`


export const ProfileContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 5fr;
    column-gap: 1rem;
    background-color: var(--second-bg);
    box-shadow: var(--box-shadow-dark);
    border-radius: 5px;
    margin-top: 8rem;
    `

export const ProfilePic = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const DisplayName = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
`
export const EditButton = styled.button`
    color: var(--second-bg);
    background-color: var(--main-bg);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-left: 20px;
    &:hover{
        background-color: var(--main-bg-hover);
    }
`

export const ButtonConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width:200px;
    height: auto;    
    margin-top: 5px;
    `

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    margin-left: 20px;
    width: 35%;
    `

export const Description = styled.p`
    font-size: 0.8rem;
    color: var(--text-color);
    margin-left: 20px;
    margin-top: 20px;
    width:35%;
    text-align: justify;
`

export const ImageGalleryConatiner = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow-dark);
    border-radius: 5px;
`

export const ImageAlbum = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
`