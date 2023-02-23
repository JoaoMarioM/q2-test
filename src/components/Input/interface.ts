import { TextInputProps } from "react-native";

export type InputProps = {
  placeholder: string;
  icon: any;
  iconFocus: any;
  iconValue: any;
  label?: string;
  mt?: number;
  name: string;
  control: any;
  error?: any;
} & TextInputProps;

export type InputStyleProps = {
  isFocus: boolean;
  error?: any;
};

export type InputPickerProps = {
  onChange: (date: Date) => void;
  icon: any;
  iconFocus: any;
  iconValue: any;
  label?: string;
  mt?: number;
  type: string,
};

export type ButtonPickerHeaderProps = {
  isBlue?: boolean;
};