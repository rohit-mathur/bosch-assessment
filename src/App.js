import React from 'react';
import { Navigation, Header } from './components';
import { Container, Row } from 'reactstrap';
import Routes from './routes';

function App() {
  return (
    <Container fluid>
      <Row>
        <div className="navigation-container px-0">
          <Navigation />
        </div>
        <div className="flex-stretch">
          <Header />
          <Routes />
        </div>
      </Row>
    </Container>
  );
}

export default App;
