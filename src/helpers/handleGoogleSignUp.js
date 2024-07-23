import toast from 'react-hot-toast';
import { AXIOS_INSTANCE } from '../redux/constants';

export const handleGoogleSignUp = async () => {
  try {
    const response = await AXIOS_INSTANCE.get('users/get-oauth-url');
    const { url } = response.data.data;
    window.location.href = url;
  } catch (error) {
    toast.error('Error getting Google OAuth URL');
  }
};
