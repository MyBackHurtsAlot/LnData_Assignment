import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <Logo />
                <Avatar />
            </HeaderWrapper>
        </>
    );
};

export default Header;

const HeaderWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.div`
    width: 120px;
    height: 36px;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;

const Avatar = styled(RxAvatar)`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;
