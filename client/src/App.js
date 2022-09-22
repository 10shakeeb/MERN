import React from 'react';
import { Container } from '@material-ui/core';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

 
const App = () => (
    <BrowserRouter>
       <Container maxwidth='lg'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='auth' element={<Auth/>} />
            </Routes>
        </Container>
    </BrowserRouter>
);

export default App;

// passed as a prop to all children components the function setCurrentId and the data currentId so that a post can be updated.