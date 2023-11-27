import React from 'react';
import { Dropdown as SemiDropdown, Icon } from '@douyinfe/semi-ui';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from 'src/assets/icons/semi-icons-chevron_right.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Flex from '../Box/Flex';

type ColumnsProps = {
  label: string
  to?: string
  render?(text?: string, item?: ColumnsProps): React.ReactNode
}

interface IProps {
  children?: React.ReactNode
  columns: ColumnsProps[]
  title?: string | null
  columns2?: ColumnsProps[]
  title2?: string | null
  style?: React.CSSProperties
}

const Dropdown = styled(SemiDropdown)`
  min-width: 174px;
  background-color: #161616 !important;
  border-radius: 8px !important;
  border: 1px solid #FF9231;
  margin-top: 16px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  

  gap: 12px;
  padding: 12px 22px;
  .title {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 8px; */
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.selected {
    color: ${({ theme }) => theme.colors.primary};

  }
`;

const Hover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 8px; */
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #FF9231;
  }
  &.selected {
    color: #FF9231;

  }
  .selected {
    color: #FF9231;

  }
`;

export default function DropdownMenu(props: IProps) {
  const {
    children, columns, title, columns2, title2, style,
  } = props;
  const history = useLocation();
  const navigate = useNavigate();
  const { pathname } = history;
  const hanldeClick = (item: ColumnsProps) => {
    if (item.to) {
      navigate(item.to);
    }
  };

  return (
    <Dropdown
      trigger="click"
      position="bottomRight"
      clickToHide
      render={(
        <Flex gap="30px" justifyContent="center">
          <Menu style={style}>
            {
              title
                ? <div className="title">{title}</div>
                : null
            }
            {
              columns.map((item, index) => (typeof item.render === 'function' ? <Hover key={item.label}>{item.render(item.label, item)}</Hover> : (
                <Option onClick={() => hanldeClick(item)} className={pathname === item.to ? 'selected' : ''} key={item.label}>
                  {item.label}
                  {/* {pathname === item.to ? <Icon svg={<ChevronRight />} /> : null} */}
                </Option>
              )))
            }
          </Menu>
          {
            columns2 ? (
              <Menu style={style}>
                {
                  title2
                    ? <div className="title">{title2}</div>
                    : null
                }
                {
                  columns2.map((item, index) => (typeof item.render === 'function' ? <Hover key={item.label}>{item.render(item.label, item)}</Hover> : (
                    <Option onClick={() => hanldeClick(item)} className={pathname === item.to ? 'selected' : ''} key={item.label}>
                      {item.label}
                      {/* {pathname === item.to ? <Icon svg={<ChevronRight />} /> : null} */}
                    </Option>
                  )))
                }
              </Menu>
            )
              : ''
          }

        </Flex>
      )}
    >
      {children}
    </Dropdown>
  );
}
