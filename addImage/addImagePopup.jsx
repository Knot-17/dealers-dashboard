import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import {TitleContainer , CloseButton , HeadContainer } from './addImageElements';

const AddImagePopup = (props) => {
    const {title , children , openPopup , setOpenPopup} = props;
  return (
    <>
       
            <Dialog open={openPopup}
             fullWidth='500px'
             maxWidth='sm'
             >
                <DialogTitle>
                    <HeadContainer>
                      <TitleContainer> Upload moments </TitleContainer>
                      <CloseButton onClick={() => setOpenPopup(false)}> X </CloseButton>
                    </HeadContainer>
                </DialogTitle>
                
                  <DialogContent>
                      {children}
                  </DialogContent>
                
            </Dialog>

    </>
  )
}

export default AddImagePopup