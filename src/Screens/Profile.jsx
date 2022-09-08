import React  ,{useState}from 'react'
import { ImageGalleryConatiner, MainContainer, ProfileContainer, ProfileImage,ProfilePic,ProfileInfo, DisplayName, TopContainer, EditButton, Description, ButtonConatiner, ImageAlbum } from '../components/profile/profileElements'
import profile from './../assets/images/logo.png'

import AddImagePopup from '../components/addImage/addImagePopup'
import AddImage from '../components/addImage/addImage'

const Profile = () => {

    const [openPopup, setOpenPopup] = useState(false);

  return (
   <>
    <MainContainer>
        <ProfileContainer>
            <ProfilePic>
                <ProfileImage src={profile}/>
            </ProfilePic>
            <ProfileInfo>
                <TopContainer>
                     <DisplayName>Keishini J</DisplayName>
                     <EditButton >Edit Profile</EditButton>
                </TopContainer>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
            </ProfileInfo>
        </ProfileContainer>
        <ImageGalleryConatiner>
            <ButtonConatiner>
                <EditButton onClick={() => setOpenPopup(true)}> Add Moments </EditButton>
            </ButtonConatiner>
            <ImageAlbum>
                    Aiyo Paavam
            </ImageAlbum>
        </ImageGalleryConatiner>
        <AddImagePopup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
            <AddImage/>
        </AddImagePopup>
    </MainContainer>
   </>
  )
}

export default Profile