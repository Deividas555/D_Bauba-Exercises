import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lenovo from './Lenovo.jsx';
import Macbukas from './Macbukas.jsx';
import Lenmacbukas from './aceris.jsx';

function ItemCard() {
  return (
    <Container className='ItemCardContainer'>
      <Row className='no-gutters'>
        <Col className='ItemContainer'><Lenovo></Lenovo></Col>
        <Col className='ItemContainer'><Macbukas></Macbukas></Col>
        <Col className='ItemContainer'><Lenmacbukas></Lenmacbukas></Col>
      </Row>
    </Container>
  );
}

export default ItemCard;
