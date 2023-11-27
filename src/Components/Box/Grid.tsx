import styled from 'styled-components';
import Box from './index';

const Grid = styled(Box)<{
  gap?: string;
}>`
  display: grid;
  gap: ${({ gap }) => gap && gap};
`;

export default Grid;
