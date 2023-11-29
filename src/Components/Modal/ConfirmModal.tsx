import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Icon, Input, Modal } from '@douyinfe/semi-ui';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from '../../assets/svg/close.svg'
import Flex from '../Box/Flex';
import Box, { Typography } from '../Box';
import { IOpenModal } from '../ModalContext/ModalContext';
import Column from '../Box/Column';
import rabbit from './rabbitModal.png'
import { ModalType } from '../../pages/Airdrop/Index';
import { InputProps } from '@douyinfe/semi-ui/lib/es/input';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

const InputEmail = styled(Input)<InputProps>`
    border-radius: 10px;
  /* background: #383838; */
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border: none;
  .semi-input {
    height: 44px;
    border-radius: 8px;
    background-color: #383838 !important;
    ::placeholder {
      color: #7C7C7C;
      font-weight: 400 !important;
      font-size: 16px;
    }
    :hover {
      background-color: #383838 !important;
    }
  }
  .semi-input-wrapper-focus {
    border: none !important;
  }
  .semi-input-wrapper-focus:active {
    border: none !important;
  }
  .semi-input-wrapper {
    border: none;
  }
  .input {
    border: none
  }
`

export type ConfirmModalProps = {
  onFnUp(): void | any
  onFnDown(address?: string): void | any
  title: string
  BtnTextUp: string
  BtnTextDown: string
  confirmText: string | JSX.Element
  type?: ModalType
}

/* Verify email */
export const EMAIL_REG = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  email?: string;
};

export default function ConfirmModal(props: ConfirmModalProps & IOpenModal) {
  const theme = useTheme();
  const [email, setEmail] = useState<string>();
  const [regEmail, setRegEmail] = useState<boolean>(false);

  const FormResolver = yup.object().shape({
    email: yup.string().typeError('Please enter')
      .matches(EMAIL_REG, 'Please enter a valid email')
      .required('Please enter'),
  });

  const {
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(FormResolver),
    mode: 'onChange',
  });


  return (
    <Box id="modal">
      <Modal
        onCancel={props.destoryComponent}
        title=""
        closable={false}
        bodyStyle={{ padding: '0 40px', background: '#161616', border: '1px solid #FF9231', borderRadius: '16px', margin: '30px' }}
        visible={true}
        header={null}
        footer={null}
        height={'content'}
        width={'454px'}
        centered
      // style={{ borderRadius: '16px' }}
      >
        <Box
          position={'absolute'}
          top='0px'
          left={'0px'}
        >
          <img src={rabbit} alt='' />
        </Box>
        <Header>
          {/* <Box /> */}
          <Box cursor={'pointer'} alignSelf={'self-end'}>
            <Icon onClick={props.destoryComponent} svg={<Close />} />
          </Box>
          <Typography>{props.title}</Typography>
        </Header>
        <Flex
          fontSize={'16px'}
          fontWeight={300}
          textAlign={'center'}
          color={'#fff'}
        >
          {props.confirmText}
        </Flex>
        <Column mt='48px' mb='40px' gap='24px' >

          {
            props.type === ModalType.Email
            ? <Column>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputEmail
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  forwardRef={field.ref}
                  className='loginShaBishejiAutoFill'
                  placeholder={'Please enter your email address'}
                />
              )}
            />
            {errors.email && <Box color='red'>{errors.email.message}</Box>}
            </Column>
            : <Flex
            alignItems={'center'}
            justifyContent={'center'}
            background={'#FF9231'}
            borderRadius={'8px'}
            fontSize={'18px'}
            fontWeight={700}
            onClick={() => {
              props.onFnUp()
              // props.destoryComponent();
            }}
            width='100%'
            height='47px'
            color='#fff'
          >
            {props.BtnTextUp}
          </Flex>
          }

          
          <Flex onClick={() => {
            if(props.type === ModalType.Email) {
              const address = getValues('email')
              if(errors.email || !address) return
              // 保存并且领取奖励
              props.onFnDown(address)
              
              return;
            }
            props.onFnDown()
          }}
            alignItems={'center'}
            justifyContent={'center'}
            background={'#FF9231'}
            borderRadius={'8px'}
            fontSize={'18px'}
            fontWeight={700}
            width='100%'
            height='47px'
            color='#fff'
          >
            {props.BtnTextDown}
          </Flex>
        </Column>
      </Modal>
    </Box>
  )
}
