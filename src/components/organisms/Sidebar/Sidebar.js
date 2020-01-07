import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import LogoIcon from 'assets/logo.svg'
import withContext from 'hoc/withContext';


const StyledWrapper = styled.nav`
    position: fixed;
    left: 0%;
    top: 0;
    height: 100vh;
    width: 150px;
    padding: 25px 0;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const StyledIcons = styled.div`
    height: 100%;
    margin: 20px 0 20px 0;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 67px;
    height: 67px;
    border-radius: 20px;
    background-image: url(${LogoIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;
`;

const StyledLogoutBtn = styled.div`
    display: block;
    width: 67px;
    height: 67px;
    border-radius: 20px;
    background-image: url(${({icon}) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
    margin-top: auto;
`;

const Sidebar = ({ pageContext }) => (
    <StyledWrapper activeColor={pageContext} >
        <StyledLogoLink to="/notes"/>
        <StyledIcons>
            <ButtonIcon  as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
            <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
            <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
        </StyledIcons>
        <StyledLogoutBtn as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
);


Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  };

Sidebar.defaultProps = {
    pageContext: 'notes',
};

export default withContext(Sidebar);