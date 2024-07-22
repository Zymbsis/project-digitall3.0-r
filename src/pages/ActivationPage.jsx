import { Loader } from 'components/index.js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { activateUser } from '../redux/auth/operations.js';

const ActivationPage = () => {
  // const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const [isActivating, setIsActivating] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const activationToken = searchParams.get('token');

  // useEffect(() => {
  //   try {
  //     setIsError(false);
  //     setIsActivating(true);
  //     dispatch(activateUser(activationToken));
  //     setIsActivating(false);
  //     navigate('/tracker');
  //   } catch (error) {
  //     setIsActivating(false);
  //     setIsError(true);
  //   }
  // }, [activationToken, navigate, dispatch]);
  return (
    <>
      {isActivating && <Loader></Loader>}
      {isError && (
        <div>
          <p>Activation token expired</p>
          <button
            type="button"
            onClick={console.log('requesting new activation email handler')}
          >
            Resend
          </button>
        </div>
      )}
    </>
  );
};

export default ActivationPage;
