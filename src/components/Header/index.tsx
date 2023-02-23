import { Container } from './styles';

import Logo from "../../assets/images/logo.svg";
import LogoSmall from "../../assets/images/logoSmall.svg";
import { HeaderProps } from './interface';

export function Header({larger}: HeaderProps) {
  return (
    <Container>
        {
            larger ? (
                <Logo />
            ) : (
                <LogoSmall />
            )
        }
    </Container>
  );
}
