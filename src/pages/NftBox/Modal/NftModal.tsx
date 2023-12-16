import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Icon, Modal } from '@douyinfe/semi-ui';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Close } from '../../../assets/svg/close.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IOpenModal } from '../../../Components/ModalContext/ModalContext';
import Box, { Typography } from '../../../Components/Box';
import Flex from '../../../Components/Box/Flex';
import { copySvgIcon } from '../../../utils/svgManage';
import { copyToClipboard } from '../../../utils/tools';
import SampleNextArrow from './SampleNextArrow.png'
import SamplePrevArrow from './SamplePrevArrow.png'
import jipingPng from './jipingPng.png'
import putongPng from './putongPng.png'
import xiyouPng from './xiyouPng.png'
import { NFTSlider } from '../index.styled';
import { usePluginModel } from '../../../hook/usePluginModel';
import { useAppSelector } from '../../../hook/hooks';
import abi from "../../../abi/abi.json"
import { BigNumber } from 'ethers';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  ${({ theme }) => theme.mediaWidth.sm`

    margin-bottom: 9px;
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

export type NftModalProps = {
  tokenId: number
}

export default function NftModal(props: NftModalProps & IOpenModal) {
  const {tokenId} = props;
  const theme = useTheme();
  const [nftNum, setNftNum] = useState<number>()
  const { getTokensOfOwner } = usePluginModel()
  const store = useAppSelector((state) => state.App)
    // 查询所有的nft tokenId
  async function getBalance() {
    const nftNum = await getTokensOfOwner( store.walletAddress)

    setNftNum(nftNum)
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

  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div><img src={SampleNextArrow} alt='' /></div>,
    prevArrow: <div><img src={SamplePrevArrow} alt='' /></div>
  };
  const address = abi.contracts.rabbitNFT.address
  return (
    <Box id="modal">
      <Modal
        onCancel={props.destoryComponent}
        title=""
        closable={false}
        bodyStyle={{ minWidth: theme.isH5 ? '325px' : '454px', display: 'flex', flexDirection: 'column', alignItems: 'center',padding: theme.isH5 ? '20px 13px' : '25px 22px 40px', background: '#161616', border: '1px solid #FF9231', borderRadius: '16px', }}
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
          {/* <Box /> */}
          <Box cursor={'pointer'} alignSelf={'self-end'}>
            <Icon onClick={props.destoryComponent} svg={<Close />} />
          </Box>
        </Header>

        <Typography mb={theme.isH5 ? '27px' : '40px'} color={'#fff'} fontSize={theme.isH5 ? '18px' : '35px'} fontWeight={700}>{formatTitle(tokenId)}</Typography>


        <Box  width={theme.isH5 ? "82px" : "164px"} height={theme.isH5 ? "120px" : "240px"} >
          <img  width={theme.isH5 ? "82px" : "164px"} height={theme.isH5 ? "120px" : "240px"} src={formatPng(tokenId)} alt='' />
        </Box>
 
        {/* <NFTSlider>
            <Slider {...settings}>
              
              <div>
                <img src={formatPng(tokenId)} alt='' />
              </div>
              <div>

                <img src={textPng} alt='' />
              </div>
              <div>

                <img src={textPng} alt='' />
              </div>
            </Slider>
          </NFTSlider> */}
    
        <Flex mt='10px' color='#fff' 
        fontSize={theme.isH5 ? '14px' :'18px'} fontWeight={700}>
          {/* {formatName(tokenId)} */}
          {`#${nftNum || '-'}`}
        </Flex>

        <Flex
          mt={theme.isH5 ? '26px' :'18x'}
          borderRadius={'6px'}
          border={'1px solid #ff9231'}
          background={'rgba(190, 117, 52, 0.10)'}
          padding={theme.isH5 ? '5px' : '10px'}
          fontSize={theme.isH5 ? '14px' : '18px'}
          alignItems={'center'}
          color={'#fff'}
        >
          Contract address: {address.replace(address.substring(19, 38), '...')}
          <div onClick={() => {copyToClipboard(address)}}>
            <SpanSvg dangerouslySetInnerHTML={{ __html: copySvgIcon || '' }} />
          </div>
        </Flex>

        <Flex 
            alignItems={'center'}
            justifyContent={'center'}
            cursor={'pointer'}
            background={'#FF9231'}
            borderRadius={'8px'}
            fontSize={theme.isH5 ? '14px' : '18px'}
            fontWeight={700}
            width='100%'
            mt='25px'
            onClick={props.destoryComponent}
            height={theme.isH5 ? '35px' : '47px'}
            color='#fff'
          >
            Confirm
          </Flex>

      </Modal>
    </Box>
  )
}
