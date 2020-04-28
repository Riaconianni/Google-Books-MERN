import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import NavBar from './components/Navbar';


function App() {
  return (
    <Router>
      <>
      <NavBar />
      <Container className='my-4'>
      <Switch>
        <Route exact path='/' component={SearchBooks} />
        <Route exact path='/saved' component={SavedBooks} />
        <Route render={() => <h1 className='display-2'>Wrong Page!!</h1>} />
      </Switch>
      </Container>
      </>
    </Router>
  )
}

export default App;
