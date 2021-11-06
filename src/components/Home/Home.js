import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Dummy = ({ title }) => <h1>{title}</h1>;

const Home = ({ session }) => {
  console.log(session);
  return (
    <Router>
      <Flex
        minH={'100vh'}
        direction={'column'}
        align={'center'}
        justify={'space-between'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Dummy title="Dashboard" />} />
          <Route path="/reviews" element={<Dummy title="Reviews" />} />
          <Route path="/profile" element={<Dummy title="Profile" />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Flex>
    </Router>
  );
};

export default Home;
