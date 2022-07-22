import { createContext, useContext, useState, FC } from 'react';

const InformationContext = createContext<IInformationContextValue | string>(
  'No permission to use this context',
);

export const InformationProvider: FC<IInformationContext> = ({ children }) => {
  const [information, setInformation] = useState<IFormSignUp>({
    role: 'Empty',
    name: 'Empty',
    email: 'Empty',
    password: 'Empty',
    rePassword: 'Empty',
    subscribe: ['Empty'],
    accept: ['Empty'],
  });

  const handleChangeInformation = (information: IFormSignUp) => {
    setInformation(information);
  };

  const value = {
    information,
    handleChangeInformation,
  };

  return <InformationContext.Provider value={value}>{children}</InformationContext.Provider>;
};

export const useInformation = (): IInformationContextValue | boolean => {
  const context = useContext(InformationContext);

  if (typeof context === 'string') {
    // throw new Error(context);
    return false;
  }

  return context;
};
