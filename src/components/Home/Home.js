import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { supabase } from '../../lib/supabaseClient';
import NewReview from '../../pages/NewReview';
import Reviews from '../../pages/Reviews';

const Dummy = ({ title }) => <h1>{title}</h1>;

const Home = ({ session }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(supabase.auth.user());
  }, []);
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
          <Route path="/dashboard" element={<Dummy title="Dashboard" />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/new" element={<NewReview />} />
          <Route path="/profile" element={<Dummy title="Profile" />} />
          <Route path="/settings" element={<Dummy title="Settings" />} />
          <Route path="/help" element={<Dummy title="Help" />} />
          <Route path="*" element={<Dummy title="404" />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Flex>
    </Router>
  );
};

export default Home;
