import React, { useRef } from 'react';
import { AarcProvider } from './context/AarcProvider';
import AlchemyAarcApp from './components/AlchemyAarcApp';
import "@aarc-xyz/eth-connector/styles.css"
import './index.css';
import { AarcFundKitModal } from '@aarc-xyz/fundkit-web-sdk';
import { aarcConfig } from './config/aarcConfig';
import { AlchemyProvider } from './context/AlchemyProvider';
import { cookieToInitialState } from "@account-kit/core";
import { alchemyConfig } from './config/alchemyConfig';

const App = () => {
  const aarcModalRef = useRef(new AarcFundKitModal(aarcConfig));
  const aarcModal = aarcModalRef.current;

  const initialState = cookieToInitialState(
    alchemyConfig,
    document.cookie ?? undefined
  );

  return (
    <React.StrictMode>
      <AlchemyProvider
        initialState={initialState}
      >
        <AarcProvider aarcModal={aarcModal}>
          <AlchemyAarcApp
            isDark={true}
            logoLight="/logo.svg"
            logoDark="/logo.svg"
            aarcModal={aarcModal}
            onThemeToggle={() => {}}
          />
        </AarcProvider>
      </AlchemyProvider>
    </React.StrictMode>
  );
};

export default App;