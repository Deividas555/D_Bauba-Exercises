import './ItemCard.css';
import nuotrauka from '../assets/images/lenovo.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Lenovo() {
  return (
    <>
        <img src={nuotrauka} alt="wz" />
        <p>duojahdaodhaoupdhauodhs</p>
          <Container>
            <Row>
              <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>72.44 $/men</h2></Col>
              <Col><h3 style={{ fontSize: '1.2em' }}>3000.33eur</h3></Col>
            </Row>
          </Container>
    </>
  )
}

export default Lenovo
