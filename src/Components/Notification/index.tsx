import React from 'react';
import { Notification } from '@douyinfe/semi-ui';
import { useTheme } from 'styled-components';
import { ReactComponent as Errors } from '../../assets/icons/icons-error-circle.svg';
import { ReactComponent as Warm } from '../../assets/icons/icons-warm-circle.svg';
import { ReactComponent as Success } from '../../assets/icons/icons-success-circle.svg';
import Flex from '../Box/Flex';
import { Typography } from '../Box/index';
import Column from '../Box/Column';


export interface NoticeProps {
  duration?: number;
  title?: any;
  fnText?: any;
  content?: any;
  onClick?: () => void;
  // showClose?: boolean;
  // close?: (id: string | number) => void;
  // zIndex?: number;
  // icon?: any;
  // getPopupContainer?: () => HTMLElement;
  // onHookClose?: () => void;
  // className?: string;
  // style?: any;
}

const Notice = {
  Error: (noticeProps:NoticeProps) => {
    const id = Notification.open({
      title: (
        <Flex gap="8px" alignItems="start">
          <Flex mt="3px">
            <Errors />
          </Flex>
          <Typography fontSize="14px" fontWeight="500">{noticeProps.title}</Typography>
        </Flex>
      ),
      content: (
        <Column gap="10px">
          <Typography marginTop={noticeProps.content ? '10px' : ''} fontSize="14px" fontWeight="500">{noticeProps.content}</Typography>
          { noticeProps.fnText && (
          <Typography
            cursor="pointer"
            color="#4D53F5"
            fontSize="14px"
            fontWeight="500"
            onClick={() => {
              Notification.close(`${id}`);
              return noticeProps.onClick && noticeProps.onClick();
            }}
          >
            {noticeProps.fnText}
          </Typography>
          )}
        </Column>
      ),
      duration: noticeProps.duration ?? 3,
    });
    return id;
  },
  Warning: (noticeProps:NoticeProps) => {
    const id = Notification.open({
      title: (
        <Flex gap="8px" alignItems="start" marginBottom="10px">
          <Flex mt="3px">
            <Warm />
          </Flex>
          <Typography fontSize="14px" fontWeight="500">{noticeProps.title}</Typography>
        </Flex>
      ),
      content: (
        <Column gap="10px">
          <Typography fontSize="14px" fontWeight="500">{noticeProps.content}</Typography>
          { noticeProps.fnText && (
          <Typography
            cursor="pointer"
            color="#4D53F5"
            fontSize="14px"
            fontWeight="500"
            onClick={() => {
                 Notification.close(`${id}`);
              return noticeProps.onClick && noticeProps.onClick();
            }}
          >
            {noticeProps.fnText}
          </Typography>
          )}
        </Column>
      ),
      duration: noticeProps.duration ?? 3,
    });
    return id;
  },
  Success: (noticeProps:NoticeProps) => {
    const id = Notification.open({
      title: (
        <Flex gap="8px" alignItems="start" marginBottom="10px">
          <Flex mt="3px">
            <Success />
          </Flex>
          <Typography fontSize="14px" fontWeight="500">{noticeProps.title}</Typography>
        </Flex>
      ),
      content: (
        <Column gap="10px">
          <Typography fontSize="14px" fontWeight="500">{noticeProps.content}</Typography>
          { noticeProps.fnText && (
          <Typography
            fontSize="14px"
            cursor="pointer"
            color="#4D53F5"
            fontWeight="500"
            onClick={() => {
                 Notification.close(`${id}`);
              return noticeProps.onClick && noticeProps.onClick();
            }}
          >
            {noticeProps.fnText}
          </Typography>
          )}
        </Column>
      ),
      duration: noticeProps.duration ?? 3,
    });
    return id;
  },
  Info: (noticeProps:NoticeProps) => {
    const id = Notification.open({
      title: (
        <Flex gap="8px" alignItems="center" marginBottom="10px">
          <Typography fontSize="14px" fontWeight="500">{noticeProps.title}</Typography>
        </Flex>
      ),
      content: (
        <Column gap="10px">
          <Typography fontSize="14px" fontWeight="500">{noticeProps.content}</Typography>
          { noticeProps.fnText && (
          <Typography
            cursor="pointer"
            color="#4D53F5"
            fontSize="14px"
            fontWeight="500"
            onClick={() => {
                 Notification.close(`${id}`);
              return noticeProps.onClick && noticeProps.onClick();
            }}
          >
            {noticeProps.fnText}
          </Typography>
          )}
        </Column>
      ),
      duration: noticeProps.duration ?? 3,
    });
    return id;
  },
};

export default Notice;
