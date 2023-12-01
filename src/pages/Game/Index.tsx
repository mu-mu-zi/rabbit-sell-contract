import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import HeaderNav from '../../Components/Heder';
import { CardDetails, Content, GameTopBG, GameWrap, MarkdownContainer, Title } from './Index.styled';
import { BottomBG } from '../Home/HomeIndex.styled';
import aaaa from './aaaa.png'
import { TgSvgIcon, XSvgIcon, RdSvgIcon, iosIcon, androidIcon, appleIcon, webIcon, windowsIcon, videoSvgIcon } from '../../utils/svgManage';
import axios from 'axios';
import Paginate from '../../Components/Paginate';
import h5PtoSign from './h5PtoSign.png'
import PtoSign from './PtoSign.png'
import Toggle from '../../Components/Toggle/Toggle';
import { useTheme } from 'styled-components';
import { IList, IResponseData } from '../../App';

interface GameList {
  "id": string,
  "createdAt": number,
  "updatedAt": number,
  "name": string,
  "logoUrl": string,
  "developer": string,
  "gameType": string,
  "website": string,
  "content": string,
  "sortIndex": number,
  "state": string,
  "devices": {
    "id": string,
    "createdAt": number,
    "updatedAt": number,
    "gameId": string,
    "deviceType": number,
    "deviceName": string
  }[],
  "communitys": {
    "id": string,
    "createdAt": number,
    "updatedAt": number,
    "gameId": string,
    "name": string,
    "url": string,
    "remark": string
  }[]
}

export default function GameIndex() {
  const theme = useTheme();
  const [data, setData] = useState<GameList[]>()
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(3)
  // 两行收缩
  const [descriptionExpand, setDescriptionExpand] = useState(false)
  const [expandBtnHidden, setExpandBtnHidden] = useState(true)

  const getGameList = async () => {

    axios.post<IResponseData<IList<GameList>>>('/dashboard/api/plg/ido/game/page', {
      "page": page,
      "pageSize": pageSize
    }).then((res) => {
      setData(res.data.data?.list)
      setTotal(res.data.data?.total || 0)

    }).catch((error: any) => {
      console.log(error)
    })

  }

  useEffect(() => {
    getGameList()
  }, [page])
  const getImg = (name: string) => {
    switch (name) {
      case 'Twitter':
        return XSvgIcon
      case 'Discord':
        return RdSvgIcon
      case 'Telegram':
        return TgSvgIcon
      default:
        return '';
    }
  }

  const getNameImg = (name: string) => {
    switch (name) {
      case 'iOS':
        return iosIcon
      case 'Android':
        return androidIcon
      case 'Mac':
        return appleIcon
      case 'Windows':
        return windowsIcon
      case 'Web':
        return webIcon
      default:
        return '';
    }
  }

  return (
    <GameWrap>
      <HeaderNav />
      <GameTopBG>
        <Title>
          <span>Hot </span>
          Games
        </Title>
      </GameTopBG>

      <Content>
        {
          data?.map((item) => {
            return <CardDetails key={item.id}>
              <div className='img_bg'>
                <div className='sign'>
                  {/* <img src={theme.isH5 ? h5PtoSign : PtoSign} alt='' /> */}
                  <span dangerouslySetInnerHTML={{ __html: videoSvgIcon || '' }} />
                  <div className='sign_text'>Live streaming (pre release)</div>
                </div>
                <img width={'100%'} height={'100%'} src={item.logoUrl} alt='' />
              </div>

              <div>
                <div className='name ellipsis'>{item.name}</div>
                <div className='partner'>
                  {
                    item.communitys.map((info) => {
                      return <a key={info.name} href={info.url} dangerouslySetInnerHTML={{ __html: getImg(info.name) || '' }} />
                    })
                  }
                </div>
                <MarkdownContainer ref={(e) => {
                  if (!e) return
                  if (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) {
                    setExpandBtnHidden(false)
                  } else {
                    if (descriptionExpand) {
                      setExpandBtnHidden(false)
                    } else {
                      setExpandBtnHidden(true)
                    }
                  }
                }} expand={descriptionExpand}>
                  <div className='describe'>
                    {item.content}
                  </div>
                </MarkdownContainer>
                <Toggle vIf={!expandBtnHidden}>
                  <div className='hiddenText' onClick={() => { setDescriptionExpand(!descriptionExpand) }}>
                    {
                      descriptionExpand
                        ? 'Retract'
                        : 'More'
                    }
                  </div>
                </Toggle>

                <div className='info'>
                  <div className='flex-info'>
                    <span className='left'>State:</span>
                    <span className='right'>{item.state}</span>
                  </div>
                  <div className='flex-info'>
                    <span className='left'>Developer:</span>
                    <span className='right'>{item.developer}</span>
                  </div>
                  <div className='flex-info'>
                    <span className='left'>Type:</span>
                    <span className='right'>{item.gameType}</span>
                  </div>
                  <div className='flex-info'>
                    <span className='left'>Website:</span>
                    <a style={{color: '#FF9231'}}  href={item.website} target='_blank' className='right ellipsis' rel="noreferrer">{item.website}</a>
                  </div>
                </div>

                <div className='signRow'>
                  {
                    item.devices.map((_i) => {
                      return <span dangerouslySetInnerHTML={{ __html: getNameImg(_i.deviceName) || '' }} />
                    })
                  }
                </div>
              </div>
            </CardDetails>
          })
        }
        
        <div className='paginate'>
        <Paginate
          total={total || 0}
          pageSize={pageSize}
          page={page}
          justify="flex-end"
          onPageChanged={(e) => { console.log(e); setPage(e); }}
        />
</div>

      </Content>
      <Toggle vIf={!theme.isH5}>
        <BottomBG />
      </Toggle>
      <Footer />
    </GameWrap>
  )
}
