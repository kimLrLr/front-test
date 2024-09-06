import styled from "styled-components";
import { deviceSize } from "../style/GlobalStyled";

const Con = styled.div`
  // sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400

  @media screen and (max-width: ${deviceSize.sm}) {
    margin: 0;
  }
  /* @media screen and (max-width: ${deviceSize.md}) and (min-width: ${deviceSize.sm}) {
    width: 540px;
  } */
  /* @media screen and (max-width: ${deviceSize.lg}) and (min-width: ${deviceSize.md}) {
    padding: 150px 5%;
  }
  @media screen and (max-width: ${deviceSize.xl}) and (min-width: ${deviceSize.lg}) {
    padding: 150px 5%;
  }
  @media screen and (max-width: ${deviceSize.xxl}) {
    padding: 150px 5%;
  } // 1400 이상은 그냥 기본으로 작성하는게 나을 수 있음 */
`;

export const Layout = ({ children }) => {
  return <Con>{children}</Con>;
};
