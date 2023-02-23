import { Button, ButtonTitle, Container, Title } from "./styles";

import { Header } from "../../components/Header";

import UserIcon from "../../assets/images/userIcon.svg";
import UserIconFocus from "../../assets/images/userIconFocus.svg";
import UserIconValue from "../../assets/images/userIconValue.svg";

import PasswordIcon from "../../assets/images/passwordIcon.svg";
import PasswordIconFocus from "../../assets/images/passwordIconFocus.svg";
import PasswordIconValue from "../../assets/images/passwordIconValue.svg";

import { useLogin } from "./hooks";
import { Input } from "../../components/Input";
import { Preloader } from "../../components/Preloader";

export function Login() {
  const { handleLogin, control, handleSubmit, errors, isLoading  } = useLogin();

  return (
    <Container>
      <Header larger />

      <Title>Olá, que bom te ver de novo. Vamos começar?</Title>

      <Input
        control={control}
        name="email"
        placeholder="email"
        icon={<UserIcon />}
        iconFocus={<UserIconFocus />}
        iconValue={<UserIconValue />}
        error={errors}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        control={control}
        name="password"
        placeholder="Password"
        icon={<PasswordIcon />}
        iconFocus={<PasswordIconFocus />}
        iconValue={<PasswordIconValue />}
        mt={24}
        secureTextEntry
        autoCapitalize="none"
        error={errors}
      />

      <Button onPress={handleSubmit(handleLogin)}>
        <ButtonTitle>{isLoading ? <Preloader /> : "Entrar"}</ButtonTitle>
      </Button>
    </Container>
  );
}
