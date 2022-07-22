interface IInformationContext {
  children: JSX.Element;
}

interface IInformationContextValue {
  information: IFormSignUp;
  handleChangeInformation: (information: IFormSignUp) => void;
}
