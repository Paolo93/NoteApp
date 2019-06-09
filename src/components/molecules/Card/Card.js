import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, {css} from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg'

const StyledWrapper = styled.div`
    min-height: 380px;
    border-radius: 10px;
    box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    position: relative;
    padding: 17px 30px 10px;
    background-color: ${({activeColor, theme}) => activeColor ? theme[activeColor] : 'white'};

    :first-of-type {
        z-index: 5;
    }

    ${({flex}) => 
        flex && css `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}
`;

const DateInfo = styled(Paragraph)`
    font-weight: ${({theme}) => theme.bold };
    font-size: ${({theme}) => theme.fontSize.xs };
    margin: 0 0 5px;
`;

const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({theme}) => theme.twitters};
    border-radius: 50px;
    position: absolute;
    right: 25px;
    top: 25px;
`;

const StyledLinkButton = styled.a`
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50px;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 60%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
`;

class Card extends Component {
    state = {
      redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    render() 
    {
        const { id, cardType, title, created, twitterName, articleUrl, content } = this.props;
    
        if (this.state.redirect) {
            return <Redirect to={`${cardType}/${id}`} />;
        }
        
        return (
        <StyledWrapper onClick={this.handleCardClick}>
            <InnerWrapper activeColor={cardType}>
                <StyledHeading>{title}</StyledHeading>
                <DateInfo>{created}</DateInfo>
                {cardType === 'twitters' && <StyledAvatar src="https://avatars.io/facebook/100002589551816"/>}
                {cardType === 'articles' && <StyledLinkButton href="https://rwbit.pl/10-sposobow-jak-sie-uczyc-gdy-nie-masz-czasu/?fbclid=IwAR0Br_fVK5gdTAYBU3aKy0Wah_nDRo4vWeIA-_Vc4_RzT8HWpJENGwMDbC0"></StyledLinkButton>}
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>
                    {content}
                </Paragraph>
                <Button secondary>Remove</Button>
            </InnerWrapper>
        </StyledWrapper>
        )
    }
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
  };
  
  Card.defaultProps = {
    cardType: 'notes',
    id: 1,
    twitterName: null,
    articleUrl: null,
  };
  
  export default Card;