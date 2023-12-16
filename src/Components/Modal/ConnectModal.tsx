import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Icon, Input, Modal } from '@douyinfe/semi-ui';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from '../../assets/svg/close.svg'
import Flex from '../Box/Flex';
import Box, { Typography } from '../Box';
import { IOpenModal } from '../ModalContext/ModalContext';
import Column from '../Box/Column';
import rabbit from './rabbitModal.png'
import useConnect from '../../hook/useConnect';

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

export type ConnectModalProps = {

}


export default function ConnectModal(props: ConnectModalProps & IOpenModal) {
  const theme = useTheme();
  const currentHooks = useConnect();
  // 是否连接钱包
  const [isConnect, setIsConnect] = useState<boolean>(false)
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
          <Typography>Link Wallet</Typography>
        </Header>
        <Flex
          fontSize={theme.isH5 ? '11px' : '16px'}
          fontWeight={300}
          textAlign={'center'}
          color={'#fff'}
        >
          You will receive your own signature request. Signing is free and no transaction is sent.
        </Flex>

        <Flex mt='50px' alignItems={'center'} gap='20px'>
          <Flex 
           alignItems={'center'}
            justifyContent={'center'}
            flexShrink={0}
            width={'41px'}
            height={'41px'}
            background={'#FF9231'}
            borderRadius={'50%'}
            color='#fff' 
            fontSize={'20px'}
            
            
            fontWeight={700}
          >1</Flex>
          <Column gap='5px'>
            <Typography color='#fff' fontSize={'20px'} fontWeight={700}>Verify all</Typography>
            <Typography color='#fff' fontSize={'14px'} fontWeight={500}>Make sure you are the owner of this wallet</Typography>
          </Column>
        </Flex>
        <Flex mt='40px' alignItems={'center'} gap='20px'>
          <Flex 
            alignItems={'center'}
            justifyContent={'center'}
            flexShrink={0}
            width={'41px'}
            height={'41px'}
            background={isConnect ? '#FF9231' : '#5C5C66'}
            borderRadius={'50%'}
            color='#fff' 
            fontSize={'20px'}
            
            
            fontWeight={700}
          >2</Flex>
          <Column gap='5px'>
            <Typography color='#fff' fontSize={'14px'} fontWeight={500}>Enable transaction</Typography>
          </Column>
        </Flex>

        
        <Column mt={theme.isH5 ? '17px' : '48px'} mb={theme.isH5 ? '17px' : '40px'} gap={theme.isH5 ? '15px' : '24px'} >
          <Flex
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
            onClick={async () => {
              setIsConnect(false)
              const result = await currentHooks.connect();
             
                setIsConnect(true)
                props.destoryComponent()
            
            }}
          >
            Send Request
          </Flex>
        </Column>
      </Modal>
    </Box>
  )
}
