import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#3535e3" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }} />
  </>
);

export default App;
