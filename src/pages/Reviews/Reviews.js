import { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, useToast } from '@chakra-ui/react';
import Card, { SkeletonCard } from '../../components/Card';
import { supabase } from '../../lib/supabaseClient';
import { successToast, errorToast } from '../../utils/toast';
import { dateFormatter } from '../../utils/helpers';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const toast = useToast();
  const userId = supabase.auth.user().id;

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      let { data: reviews, error } = await supabase
        .from('review')
        .select('*')
        .eq('user', userId);
      if (error) throw error;
      // console.log(`reviews`, reviews);
      setReviews(reviews);
    } catch (error) {
      toast({
        ...errorToast,
        title: 'Error retrieving reviews',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Box p={4} maxW={'full'}>
      <Heading as="h1" size="3xl" marginBottom={8} textAlign="center">
        📖 Reviews
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {isLoading
          ? Array(6)
              .fill('')
              .map((_, i) => <SkeletonCard key={i} />)
          : reviews.map((review) => (
              <Card
                key={review.id}
                createdAt={dateFormatter(review.created_at)}
                title={review.title}
                author={review.author}
                format={review.format}
                review={review.review}
                rating={review.rating}
              />
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default Reviews;
