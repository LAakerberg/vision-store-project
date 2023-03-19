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
          <S.HeaderLogo><h1><S.LogoStyle>V</S.LogoStyle>ision <S.LogoStyle>S</S.LogoStyle>tore</h1></S.HeaderLogo>
          <S.HeaderSearch>Search</S.HeaderSearch>
        </S.HeaderMain>
        <S.HeaderBottom>
          <S.HeaderNavigation>
            <NavBar />
          </S.HeaderNavigation>
        </S.HeaderBottom>
      </S.HeaderSection>
    </>
  );
}


{/* <header>
<div className="bg-color-top">
  <div className="mx-2">
    <div className="flex flex-row w-11/12 m-auto space-x-2">
      <div className="flex-1">
        <img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" alt="profile"/>
      </div>
      <div className="flex-1">
        <img src="/src/assets/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg" alt="profile"/>
      </div>
      <div className="flex-1">
        <img src="/src/assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg" alt="profile"/>
      </div>
      <div className="flex-1 float-right">
        <img src="/src/assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" alt="profile"/>
      </div>
    </div>
  </div>
</div>
<div className="mx-2">
  <div className="py-4 w-11/12 m-auto flex">
    <div>
      {' '}
      <h1 className="logo-title">
        <span className="greenCap">V</span>ision{' '}
        <span className="greenCap">S</span>tore
      </h1>
    </div>
    <div className="text-center justify-center">Search</div>
  </div>
</div>
<div className="bg-white drop-shadow-lg">
  <div className="py-4 w-11/12 m-auto">
    <NavBar />
  </div>
</div>
</header> */}