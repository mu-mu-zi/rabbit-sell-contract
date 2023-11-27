import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  RequiredTheme,
  ResponsiveValue,
  space,
  SpaceProps,
  system,
  Theme,
  typography,
  TypographyProps,
} from 'styled-system';
import { HTMLAttributes } from 'react';
import { Typography as SemiTypography } from '@douyinfe/semi-ui';
import * as CSS from 'csstype';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    GridProps,
    FlexboxProps,
    Space,
    TypographyProps,
    HTMLAttributes<HTMLDivElement> {}

    interface Space<ThemeType extends Theme = RequiredTheme> {
      cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType> | undefined;
      boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType> | undefined;
      boxShadow?: ResponsiveValue<CSS.Property.BoxShadow, ThemeType> | undefined;
      whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType> | undefined;
      transform?: ResponsiveValue<CSS.Property.Transform, ThemeType> | undefined;
      backdropFilter?: ResponsiveValue<CSS.Property.BackdropFilter, ThemeType> | undefined;
    }

const Box = styled.div<BoxProps>`
  ${background}
  ${layout}
  ${border}
  ${position}
  ${space}
  ${flexbox}
  ${grid}
  ${typography}
  ${color}
  ${system({
    cursor: true,
    boxSizing: true,
    boxShadow: true,
    backdropFilter: true,
    whiteSpace: true,
    transform: true,
  })};
`;

export const Typography = styled.div<BoxProps>`
  ${background}
  ${layout}
  ${border}
  ${position}
  ${space}
  ${flexbox}
  ${grid}
  ${typography}
  ${color}
  ${system({
    cursor: true,
    boxSizing: true,
    boxShadow: true,
    backdropFilter: true,
    whiteSpace: true,
    transform: true,
  })};
`;

export const IconText = styled(SemiTypography.Text)<BoxProps>`
  ${background}
  ${layout}
  ${border}
  ${position}
  ${space}
  ${flexbox}
  ${grid}
  ${typography}
  ${color}
  line-height: normal;
  ${system({
    cursor: true,
    boxSizing: true,
    boxShadow: true,
    backdropFilter: true,
    whiteSpace: true,
    transform: true,
  })};
`;

export const Icon = styled.img<BoxProps>`
  display: inline-block;
  overflow: hidden;
  user-select: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height ?? 'auto'};
  object-fit: contain;
  -webkit-user-drag: none;
  ${background}
`;

export const Img = styled.img<BoxProps>`
  display: block;
  object-fit: cover;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  ${background}
  ${layout}
  ${border}
  ${position}
  ${space}
  ${flexbox}
  ${grid}
  ${typography}
  ${color}
`;

export default Box;
