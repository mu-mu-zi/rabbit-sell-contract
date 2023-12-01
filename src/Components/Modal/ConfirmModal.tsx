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
  ${({ theme }) => theme.mediaWidth.sm`
    margin-top: 9px;
    margin-bottom: 9px;
    font-size: 15px;
  `}
`

const InputEmail = styled(Input)<InputProps>`
    border-radius: 10px;
  /* background: #383838; */
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border: none;
  ${({ theme }) => theme.mediaWidth.sm`
    height: 26px;
    font-size: 11px;
  `}
  .semi-input {
    height: 44px;
    border-radius: 8px;
    background-color: #383838 !important;
    ${({ theme }) => theme.mediaWidth.sm`
      height: 26px;
    `}
    ::placeholder {
      color: #7C7C7C;
      font-weight: 400 !important;
      font-size: 16px;
      ${({ theme }) => theme.mediaWidth.sm`
        font-size: 11px;
      `}
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
        bodyStyle={{ padding: theme.isH5 ? '0 13px' : '0 40px', background: '#161616', border: '1px solid #FF9231', borderRadius: '16px', margin: theme.isH5 ? '19px' : '30px' }}
        visible={true}
        header={null}
        footer={null}
        height={'content'}
        width={theme.isH5 ? '257px' : '454px'}
        centered
      // style={{ borderRadius: '16px' }}
      >
        <Box
          position={'absolute'}
          top='0px'
          left={'0px'}
        >
          <img style={{ width: theme.isH5 ? '46px' : 'initial', height: theme.isH5 ? '85px' : 'initial'}} src={rabbit} alt='' />
        </Box>
        <Header>
          {/* <Box /> */}
          <Box cursor={'pointer'} alignSelf={'self-end'}>
            <Icon onClick={props.destoryComponent} svg={<Close />} />
          </Box>
          <Typography>{props.title}</Typography>
        </Header>
        <Flex
          fontSize={theme.isH5 ? '11px' : '16px'}
          fontWeight={300}
          textAlign={'center'}
          color={'#fff'}
        >
          {props.confirmText}
        </Flex>
        <Column mt={theme.isH5 ? '17px' : '48px'} mb={theme.isH5 ? '17px' : '40px'} gap={theme.isH5 ? '15px' : '24px'} >

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
            fontSize={theme.isH5 ? '14px' : '18px'}
            fontWeight={700}
            cursor={'pointer'}
            onClick={() => {
              props.onFnUp()
              // props.destoryComponent();
            }}
            width='100%'
            height={theme.isH5 ? '30px' : '47px'}
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
            cursor={'pointer'}
            background={'#FF9231'}
            borderRadius={'8px'}
            fontSize={theme.isH5 ? '14px' : '18px'}
            fontWeight={700}
            width='100%'
            height={theme.isH5 ? '30px' : '47px'}
            color='#fff'
          >
            {props.BtnTextDown}
          </Flex>
        </Column>
      </Modal>
    </Box>
  )
}
