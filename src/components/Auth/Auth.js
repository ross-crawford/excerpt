import React, { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { supabase } from '../../lib/supabaseClient';
import { Flex, Stack, Heading, Text, Box, Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FormLabel, FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const toggleLogin = () => {
    setIsLoggingIn(!isLoggingIn);
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { error } = isLoggingIn
        ? await supabase.auth.signIn({ email, password })
        : await supabase.auth.signUp({ email, password });
      if (error) throw error;
      !isLoggingIn &&
        toast({
          position: 'top',
          title: 'Success',
          description: 'Check your inbox to validate your account',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
    } catch (error) {
      toast({
        position: 'top',
        title: 'Error',
        description: error.error_description || error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize="4xl">
            {isLoggingIn ? 'Sign in' : 'Register'}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            using your email and password below ✌️
          </Text>
        </Stack>
        <Box
          as="form"
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
          onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                focusBorderColor="purple.600"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                type="submit"
                isLoading={loading}
                loadingText={isLoggingIn ? 'Signing in ...' : 'Registering ...'}
                variant="solid"
                spinnerPlacement="start"
                bg="purple.600"
                color="white"
                _hover={{
                  bg: 'purple.500',
                }}
              >
                {loading || isLoggingIn ? 'Login' : 'Register'}
              </Button>
            </Stack>
            <Stack align="center">
              <Link color="purple.600" fontSize="sm" onClick={toggleLogin}>
                {isLoggingIn
                  ? 'register for an account'
                  : 'already have an account?'}
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Auth;
