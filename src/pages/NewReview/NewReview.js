import React, { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { supabase } from '../../lib/supabaseClient';
import {
  chakra,
  VStack,
  Heading,
  Select,
  Textarea,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { successToast, errorToast } from '../../utils/toast';

const NewReview = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [format, setFormat] = useState('Book');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  const handleRatingChange = (rating) => setRating(rating);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      const newReview = {
        title,
        author,
        format,
        rating,
        review,
        user: supabase.auth.user().id,
      };
      const { error } = await supabase.from('review').insert([newReview]);
      if (error) throw error;
      toast({
        ...successToast,
        title: 'Review submitted',
        description: 'Your review has been submitted',
      });
    } catch (error) {
      toast({
        ...errorToast,
        title: 'Error',
        description: error.message,
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setTitle('');
      setAuthor('');
      setFormat('Book');
      setRating(1);
      setReview('');
    }
  };

  return (
    <Box>
      <Heading as="h1" size="3xl" marginBottom={8}>
        📖 New Review
      </Heading>
      <chakra.form onSubmit={handleSubmit}>
        <VStack spacing={8}>
          <Input
            placeholder="Title"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Author"
            variant="filled"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Select
            variant="filled"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="book">Book</option>
            <option value="ebook">E-Book</option>
            <option value="audiobook">Audio Book</option>
          </Select>
          <NumberInput
            min={1}
            max={10}
            width="full"
            variant="filled"
            value={rating}
            onChange={handleRatingChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Textarea
            placeholder="Review"
            variant="filled"
            resize="none"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Saving"
            variant="solid"
            width="100%"
            spinnerPlacement="start"
            bg="purple.600"
            color="white"
            _hover={{
              bg: 'purple.500',
            }}
          >
            Save
          </Button>
        </VStack>
      </chakra.form>
    </Box>
  );
};

export default NewReview;
