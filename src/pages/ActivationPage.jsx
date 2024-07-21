import { Loader } from 'components/index.js';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AXIOS_INSTANCE } from '../redux/constants.js';

const ActivationPage = () => {
  const [getSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const [isActivating, setIsActivating] = useState(false);
  const [isError, setIsError] = useState(false);
  const activationToken = getSearchParam('token');

  useEffect(() => {
    const activate = async () => {
      await AXIOS_INSTANCE.post('/activate', { activationToken });
    };
    try {
      setIsError(false);
      setIsActivating(true);
      activate();
      setIsActivating(false);
      navigate('/tracker');
    } catch (error) {
      console.error(error);
      setIsActivating(false);
      setIsError(true);
    }
  }, [activationToken, navigate]);
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
