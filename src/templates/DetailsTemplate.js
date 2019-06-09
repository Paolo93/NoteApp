import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';


const DateInfo = styled(Paragraph)`
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.bold };
`;

const StyledHeading = styled(Heading) `
  margin: 5px 0 0;
`;

const StyledWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 100px;

`;

const DetailsTemplate = ({ pageType, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageType} >
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      <Paragraph >{content}</Paragraph>
      <Link to="/">
        <Button>
          go back
        </Button>
      </Link>
    </StyledWrapper>
  </UserPageTemplate>
);



DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;

