interface IButton {
  type: any;
  id: string;
  name: string;
  style?: CSSProperties;
  disabled?: boolean;
  content: string | ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

interface ICol {
  column: number;
  content: JSX.Element;
  style?: CSSProperties;
}

interface IInput {
  type: string;
  id: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  style?: CSSProperties;
  required?: boolean;
  disabled?: boolean;
  onChange?: any;
}

interface ILabel {
  htmlFor: string;
  content: string;
  style?: CSSProperties;
}

interface ITitleText {
  text: string;
  textColor?: string;
  color?: string;
  textRemaining?: string;
  style?: CSSProperties;
}
