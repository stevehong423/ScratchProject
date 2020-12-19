import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import AddButton from './AddButton.jsx';
import MinusButton from './MinusButton.jsx';

const TestItemComponent = () => {
  return (
    <div>
      <Card className='my-3 p-1 rounded' style={{width:"100%", height:"16vh"}}>
        <Card.Body>
          <Row className="pb-2" style={{height: "50%", display: "flex", alignItems: "center"}}>
            <Col md="auto" style={{width: "33%"}}>
              <Card.Title style={{fontSize: '3vh'}}>
                Item Name
              </Card.Title>
            </Col>
            <Col style={{width: "33%"}}>
              <Card.Text className="text-center">
                Qty: <strong style={{fontSize: '3vh'}}>3</strong>
              </Card.Text>
            </Col>
            <Col className="text-right" style={{width: "33%"}}>
              <Button id="update-btn" variant="info" type="submit" size="sm" style={{borderRadius: '7px', width: '80px'}}>Update</Button>
            </Col>
          </Row>
          <Row className="pt-2" style={{height: "50%"}}>
            <Col style={{width: "33%"}}>
              <Card.Text>
                <i>Category</i>
              </Card.Text>
            </Col>
            <Col className="text-center" style={{width: "33%", display: 'flex', justifyContent: 'center'}}>
              <MinusButton />
              <AddButton />
            </Col>
            <Col className="text-right" style={{width: "33%"}}>
              <Button variant="danger" type="submit" size="sm" style={{borderRadius: '7px', width: '80px'}}>Delete</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TestItemComponent;
