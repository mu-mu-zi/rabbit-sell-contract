import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Icon, Modal } from '@douyinfe/semi-ui';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from '../../assets/svg/close.svg'
import jipingPng from './jipingPng.png'
import putongPng from './putongPng.png'
import xiyouPng from './xiyouPng.png'
import { BigNumber } from 'ethers';
import { useAppSelector } from '../../hook/hooks';
import { usePluginModel } from '../../hook/usePluginModel';
import { IOpenModal } from '../ModalContext/ModalContext';
import abi from '../../abi/abi.json'
import Box, { Typography } from '../Box';
import Grid from '../Box/Grid';
import Flex from '../Box/Flex';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  width: 100%;
  font-weight: 500;
  color: #fff;
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 18px;
  `}
`

const SpanSvg = styled.span`
  svg {
    
    ${({theme}) => theme.mediaWidth.sm`
      width: 16px;
    `}
  }
`

export type NftRecordModaProps = {

}

export default function NftRecordModa(props: NftRecordModaProps & IOpenModal) {

  const theme = useTheme();
  const [nftRecords, setNftRecords] = useState<{
    tokenId: number;
    nftType: number;
}[]>([])
  const { getTokensOfOwner, getTokenIdRecords } = usePluginModel()
  const store = useAppSelector((state) => state.App)
    // 查询所有的nft tokenId
  async function getBalance() {
    const records = await getTokenIdRecords( store.walletAddress)
    console.log(records)
    console.log(records[0].nftType)
    console.log(records[0].tokenId)
    setNftRecords(records)
  }

  useEffect(() => {
    getBalance()
  }, [])

  // useEffect(() => {
    
  // }, [nftNum])



  function formatTitle (tokenId: number) {
    switch (tokenId) {
      case 1:
        return `Excellent NFT`;
      case 2:
        return `Rare NFT`;
      case 3:
        return `Ordinary NFT`;
      default:
        return ;
    }
  }
  function formatName (tokenId: number) {
    switch (tokenId) {
      case 1:
        return `#00${tokenId}`;
      case 2:
        return `#00${tokenId}`;
      case 3:
        return `#00${tokenId}`;
      default:
        return ;
    }
  }
  function formatPng (tokenId: number) {
    switch (tokenId) {
      case 1:
        return jipingPng;
      case 2:
        return xiyouPng;
      case 3:
        return putongPng;
      default:
        return ;
    }
  }

  const address = abi.contracts.rabbitNFT.address
  return (
    <Box id="modal">
      <Modal
        onCancel={props.destoryComponent}
        title=""
        closable={false}
        bodyStyle={{ minWidth: theme.isH5 ? '325px' : '700px', display: 'flex', flexDirection: 'column', alignItems: 'center',padding: theme.isH5 ? '20px 13px' : '25px 22px 40px', background: '#161616', border: '1px solid #FF9231', borderRadius: '16px', }}
        visible={true}
        header={null}
        footer={null}
        style={{width: 'max-content'}}

        height={'content'}
        // width={theme.isH5 ? '257px' : '454px'}
        centered
      // style={{ borderRadius: '16px' }}
      >
        <Header>
        <Typography color={'#fff'} fontWeight={700}>
          My NFT
        </Typography>
          <Box />
          <Box cursor={'pointer'} alignSelf={'self-end'}>
            <Icon onClick={props.destoryComponent} svg={<Close />} />
          </Box>
        </Header>


        <Grid
          gridTemplateColumns={'repeat(3, 1fr)'}
          width={'100%'}
          color='#fff'
          marginTop={'10px'}
        >
          <Box>NFT</Box>
          <Box>Type</Box>
          <Box>Code</Box>
        </Grid>
        <Box
          width={'100%'}
          maxHeight={theme.isH5 ? '140px' : '350px'}
          overflow={'scroll'}
        >
        {
          nftRecords?.map(item => {
            return <Grid
              key={item.tokenId}
              gridTemplateColumns={'repeat(3, 1fr)'}
              width={'100%'}
              color='#fff'
              marginTop={'10px'}
            >
              <Flex alignItems={'center'}>
                <img  width={theme.isH5 ? "32px" : "90px"} height={theme.isH5 ? "32px" : "90px"} src={formatPng(item.nftType)} alt='' />
              </Flex>
              {/* <Box>NFT</Box> */}
              <Flex alignItems={'center'}>

              <Box>{formatTitle(item.nftType)}</Box>
              </Flex>
              <Flex alignItems={'center'}>

              <Box>#{item.tokenId}</Box>
              </Flex>
            </Grid>
          })
        }
    </Box>
        {/* <Box  width={theme.isH5 ? "82px" : "164px"} height={theme.isH5 ? "120px" : "240px"} >
          <img  width={theme.isH5 ? "82px" : "164px"} height={theme.isH5 ? "120px" : "240px"} src={formatPng(tokenId)} alt='' />
        </Box> */}
    
        
  

      </Modal>
    </Box>
  )
}
