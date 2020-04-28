import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, Card, Jumbotron } from 'react-bootstrap';
import { saveBook, searchGoogleBooks } from '../utils/API';

function SearchBooks() {
  //create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  //create method to search for books and set state
  const handleFormSubmit = event => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    
    searchGoogleBooks(searchInput)
    .then(({data}) => setSearchedBooks(data.items))
    .then(() => setSearchInput(''))
    .catch((err) => console.log(err));
  }
    return (
      <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Books!</h1>
        </Container>
      </Jumbotron>
      </>
    );
}

export default SearchBooks;