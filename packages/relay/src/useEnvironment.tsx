import React from 'react';
import { RelayModernEnvironment } from 'relay-runtime/lib/store/RelayModernEnvironment';
import { RelayMockEnvironment } from 'relay-test-utils';

// This make it easy to wrap test in the MockedEnvironment
type StateType = {
  environment: RelayModernEnvironment | RelayMockEnvironment;
};

type EnvironmentProviderInterface = {
  children: React.ReactNode;
} & StateType;

const EnvironmentContext = React.createContext<StateType | undefined>(undefined);

function EnvironmentProvider({ children, environment }: EnvironmentProviderInterface) {
  return <EnvironmentContext.Provider value={{ environment }}>{children}</EnvironmentContext.Provider>;
}

function useEnvironment() {
  const context = React.useContext(EnvironmentContext);

  if (context === undefined) {
    throw new Error('useEnvironment must be used within a EnvironmentProvider');
  }

  if (context.environment === null || context.environment === undefined) {
    throw new Error('You should provide a Relay Environment to EnvironmentProvider component');
  }

  return context;
}

export { EnvironmentProvider, useEnvironment };
