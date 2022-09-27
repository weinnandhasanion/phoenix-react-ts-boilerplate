import { createContext, useContext, useState } from 'react';
import { ErrorObject } from 'types';

type ErrorContextType = {
  errors: ErrorObject | null;
  getKey: any;
  getErrorsCount: any;
  resetErrors: any;
  hasKey: any;
  removeKey: any;
};

const ErrorContext = createContext<ErrorContextType>({
  errors: null,
  getKey: () => {},
  getErrorsCount: () => {},
  resetErrors: () => {},
  hasKey: () => {},
  removeKey: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);

const ErrorProvider = ({ children }: any) => {
  const [errors, setErrors] = useState<ErrorObject | null>(null);

  const getKey = (key: string) => {
    if (errors) return errors[key] ?? null;
  };

  const getErrorsCount = () => {
    return Object.keys(errors ?? {}).length;
  };

  const resetErrors = () => setErrors(null);

  const hasKey = (key: string) => {
    if (errors) return errors[key] !== undefined;
  };

  const removeKey = (key: string) => {
    if (!hasKey(key)) return;
    if (!errors) return;

    delete errors[key];
  };

  const providerValue = {
    errors,
    getKey,
    getErrorsCount,
    resetErrors,
    hasKey,
    removeKey,
  };

  return (
    <ErrorContext.Provider value={providerValue}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
