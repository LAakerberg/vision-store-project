import React from 'react';
import * as S from "./Header.styles"
import { NavBar } from '../components/navigation/NavBar';

// import { Link } from 'react-router-dom';

// How to build a responsive hamburger menu in react??

export function Header() {
  return (
    <>
      <S.HeaderSection>
        <S.HeaderTop>
        <S.HeaderTopContainer>
          <S.HeaderProfile><img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" alt="profile icon"/></S.HeaderProfile>
          <S.HeaderLocation><img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" alt="profile icon"/></S.HeaderLocation>
          <S.HeaderCall><img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" alt="profile icon"/></S.HeaderCall>
          <S.HeaderCart><img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" alt="profile icon"/></S.HeaderCart>
          </S.HeaderTopContainer>
        </S.HeaderTop>
        <S.HeaderMain>
          <S.HeaderMainContainer>
            <S.HeaderLogo><h1><S.LogoStyle>V</S.LogoStyle>ision <S.LogoStyle>S</S.LogoStyle>tore</h1></S.HeaderLogo>
            <S.HeaderSearch>
              <input placeholder='Search product' />
              <button>Search</button>
            </S.HeaderSearch>
          </S.HeaderMainContainer>
        </S.HeaderMain>
        <S.HeaderBottom>
          <S.HeaderNavigation>
            <S.HeaderNavigationContainer>
            <NavBar />
            </S.HeaderNavigationContainer>
          </S.HeaderNavigation>
        </S.HeaderBottom>
      </S.HeaderSection>
    </>
  );
}