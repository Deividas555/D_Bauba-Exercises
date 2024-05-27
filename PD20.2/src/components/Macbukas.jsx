import './ItemCard.css';
import pic from '../assets/images/macas.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Macbukas() {
  return (
    <>
        <img src={pic} alt="wz" />
        <p>fbjhgasigsdfyidas Cupiditate velit aspernatur iste vel quasi.</p>
            <Container>
                <Row>
                <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>32.22 $/men</h2></Col>
                <Col><h3 style={{ fontSize: '1.2em' }}>7000.44</h3></Col>
                </Row>
            </Container>
    </>
  )
}

export default Macbukas
