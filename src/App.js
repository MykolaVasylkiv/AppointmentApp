import React from 'react';
import {SlotContextProvider} from './app/contexts/slots-context';

import Navigation from './app/screens/routes';

const App = () => {
  return (
    <SlotContextProvider>
      <Navigation />
    </SlotContextProvider>
  );
};

export default App;
