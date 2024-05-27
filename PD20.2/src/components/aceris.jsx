import './ItemCard.css';
import Foto from '../assets/images/acer.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function aceris() {
  return (
    <>
      <img src={Foto} alt="alternatyvas" />
      <p>duahdosd</p>
      <Container>
        <Row>
          <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>44.44 $/men</h2></Col>
          <Col><h3 style={{ fontSize: '1.2em' }}>4444.44</h3></Col>
        </Row>
      </Container>
    </>
  );
}

export default aceris ;
