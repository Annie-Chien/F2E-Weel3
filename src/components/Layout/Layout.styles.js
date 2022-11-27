import styled from 'styled-components';
//Images
import { bgVillage } from '../../shared/images';

export const SLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: center/cover no-repeat url(${bgVillage});
  background-color: var(--clr-bg-dark);
`;
