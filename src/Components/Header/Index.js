import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <Logo
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <Avatar />
            </HeaderWrapper>
        </>
    );
};

export default Header;

const HeaderWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
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
