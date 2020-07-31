import React from 'react';

import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import ToastsContainer from './components/TostContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastsContainer />

    <GlobalStyle />
  </>
);

export default App;
