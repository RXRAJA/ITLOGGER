import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techAction';
import PropTypes from 'prop-types'

const AddTechModel = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter First Name and Last Name.' });
    } else {
      const newTech = {
        firstName: firstName,
        lastName: lastName
      }
      addTech(newTech);
      M.toast({ html: 'New tech added' });
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              placeholder='First Name'
              name='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastname'>
              Last Name
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={() => onSubmit()}
            className='modal-close waves-effect waves-light blue btn'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModel.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech}) (AddTechModel);
