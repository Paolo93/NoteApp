import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({twitters}) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, twitterName, created, id }) => (
      <Card
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      connect: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};
/*
const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters }; // before destructurisation =  {twitters : twitters} 
};
*/

// after destructurisation
const mapStateToProps = ({twitters}) => ({
  twitters
});


export default connect(mapStateToProps)(Twitters);
