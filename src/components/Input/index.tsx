import { useState } from "react";
import { Controller } from "react-hook-form";

import { InputProps } from "./interface";
import {
  Container,
  InputContainer,
  InputIconContainer,
  InputText,
  Label,
} from "./styles";

export const Input = ({
  placeholder,
  icon,
  iconFocus,
  label,
  mt,
  name,
  control,
  error,
  ...rest
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container 
      style={{ 
        marginTop: mt ? mt : 0,
      }}
    >
      {label && <Label>{label}</Label>}

      <InputContainer 
        error={error && error[name]}
        isFocus={isFocus} 
      >
        <InputIconContainer isFocus={isFocus}>
          {isFocus ? iconFocus : icon}
        </InputIconContainer>

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <InputText
                placeholder={placeholder}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={value}
                onChangeText={onChange}
                placeholderTextColor="#A3A3A3"
                {...rest}
              />
            </>
          )}
        />
      </InputContainer>
    </Container>
  );
};
