import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "../../components/Logo/Logo";

interface IHeader {
  defaultTheme: "dark" | "light";
  homeUrl: string;
}

const Header = ({ defaultTheme, homeUrl }: IHeader) => {
  console.log(defaultTheme);
  return (
    <header id="main-header" className="header">
      <Container>
        <Row>
          <Col>
            <div className="header__content">
              <a className="header__logo-link" href={homeUrl}>
                <Logo />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export { Header };
