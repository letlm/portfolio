import { Container } from "./styles";

function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Header;
