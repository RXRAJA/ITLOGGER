import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techAction';

const TechSelectOptions = ({ techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading && techs !==null &&
    techs?.map((t) => (
      <option key={t.id} value={t.firstName}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.object,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  techs: state.tech,
});

export default connect(mapStateToProp, { getTechs })(TechSelectOptions);
