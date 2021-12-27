import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techAction';

function TechListModel({techs: {techs, loading}, getTechs}) {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {(!loading) &&
            techs?.map((tech) => (
              <TechItem key = {tech.id} tech = {tech} />
            ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProp = (state) => ({
  techs: state.tech
})

TechListModel.propTypes = {
  techs: PropTypes.object,
  getTechs: PropTypes.func.isRequired,
}
export default connect(mapStateToProp, {getTechs}) (TechListModel);
