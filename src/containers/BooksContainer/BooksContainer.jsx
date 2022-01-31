import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { booksDetails } from "../../utils/booksData";
import BookCard from "./BookCard";

const BooksContainer = () => {
  return (
    <>
      <Container>
        <Row>
          {booksDetails.length > 0 &&
            booksDetails.map((book) => (
              <Col key={book.id} md={4}>
                <BookCard book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default BooksContainer;
