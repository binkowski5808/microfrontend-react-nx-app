import React, { useContext } from 'react';
import { AuthProvider } from '@microfrontend-react-nx-app/auth-provider';

const Logged = () => {
  const { isLogged } = useContext(AuthProvider);

  return <div>isLogged: {isLogged.toString()}</div>;
};
export default Logged;
