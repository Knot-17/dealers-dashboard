import { TextField } from '@mui/material'
import React from 'react'
import { ButtonContainer, InputContainer ,MainContainer } from './addImageElements'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import 'antd/dist/antd.css';

const AddImage = () => {
  return (
    <>
      <MainContainer>
       <InputContainer>
            <TextField id="outlined-basic" label="Title" variant="outlined" size="small" />
            <Space
                direction="horizontal"
                style={{
                width: '100%',
                }}
                size="large"
            >
              <Upload
                  style={{width: '100%'}}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  maxCount={1}
                  >
                  <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Space>
            <ButtonContainer> Submit </ButtonContainer>
        </InputContainer>
      </MainContainer>
    </>
  )
}

export default AddImage