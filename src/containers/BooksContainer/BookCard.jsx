import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { ArrowBarRight, ArrowRight, Image } from "react-bootstrap-icons";

const url = "http://localhost:3000/#home";

const BookCard = ({ book }) => {
  return (
    <>
      <Card style={{ width: "auto", marginTop: "14px" }}>
        <Card.Img
          variant="top"
          src={book.imgLink}
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.content}</Card.Text>
          <Container>
            <Row>
              <Col>
                <Button variant={book.bought ? "info" : "warning"}>
                  {book.bought ? "Read More" : "Buy Now"}
                </Button>
              </Col>
              {!book.bought && (
                <Col>
                  <Button variant="dark">{book.price}</Button>
                </Col>
              )}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookCard;
