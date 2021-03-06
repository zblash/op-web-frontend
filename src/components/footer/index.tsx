import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UILink } from '../link';

function Footer() {
  return (
    <Container fluid>
      <Row className="footer">
        <Col xl={12} lg={12} md={12} sm={12}>
          <p>
            Copyright © 2021 <UILink to="/"> OnlinePlasiyer </UILink> All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}
const PureFooter = React.memo(Footer);

export { PureFooter as Footer };
