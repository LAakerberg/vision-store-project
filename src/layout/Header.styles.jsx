import styled from "styled-components";

// Main header styles
export const HeaderSection = styled.header`
background-color: #f8faff;
display: flex;
flex-direction: column;
`;

// Top bar with icons
export const HeaderTop = styled.div`
display: flex;
background-color: #00c898;
justify-content: center;
`;

export const HeaderTopContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
`;

// Top bar with icons
export const HeaderProfile = styled.div``;

// Top bar with icons
export const HeaderLocation = styled.div``;

// Top bar with icons
export const HeaderCall = styled.div``;

// Top bar with icons
export const HeaderCart = styled.div``;

export const HeaderMain = styled.div`
min-height: 80px;
display: flex;
justify-content: center;
`;

export const HeaderMainContainer = styled.div`
width: 80%;
align-items: center;
display: flex;
flex-direction: row;
@media (max-width: 450px) {
    flex-direction: column;
}
`

export const HeaderLogo = styled.div`
font-family: Anton;
font-size: large;
padding: 0px 30px;
`;

export const LogoStyle = styled.span`
color: #206074;
`

export const HeaderSearch = styled.div`
flex: 1;
justify-content: center;
align-items: center;
padding: 10px;
`;

export const HeaderBottom = styled.div`
width: 100%;
background-color: #FFF;
`;

export const HeaderNavigation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFF;
filter: drop-shadow(0px 15px 10px #0000005a);
`;

export const HeaderNavigationContainer = styled.div`
width: 80%;
`;