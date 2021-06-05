import React from 'react'
import { Row, Col, Card, Button, ListGroup} from 'react-bootstrap'

function Todos() {
    return (
        <div className="container">
            <Row className="my-b mt-2">
                <Col className="col-8">
                <Card>
                    <Card.Title className="pl-4 pt-2 font-size-24">
                        <h2>Hello</h2>
                        <Row>
                            <Col className="col-7">
                                <p style={{fontSize:"14px"}} className="text-muted">Description</p>
                            </Col>
                            <Col className="col-5">
                                <a href="/" className="mx-2 btn btn-info"> <i className="fa fa-check"></i> </a>
                                <a href="/" className="mx-2 btn btn-secondary"> <i className="fa fa-minus"></i> </a>
                                <a href="/" className="mx-2 btn btn-danger"> <i className="fa fa-trash"></i> </a>
                            </Col>
                        </Row>
                    </Card.Title>
                </Card>
                <Button className='mt-3 btn btn-lg' > <i className="fa fa-plus"></i> </Button>
                </Col>
                <Col>
                <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col className="col-8">Today's TODOs</Col>
                        <Col className="col-4">
                            <span className="badge badge-pill badge-primary">12</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                        <Col className="col-8">Completed</Col>
                        <Col className="col-4">
                            <span className="badge badge-pill badge-success">2</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                        <Col className="col-8">Uncompleted</Col>
                        <Col className="col-4">
                            <span className="badge badge-pill badge-warning">10</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Todos
