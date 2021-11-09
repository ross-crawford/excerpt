import {
  Box,
  Text,
  Heading,
  Flex,
  Badge,
  ButtonGroup,
  Button,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { StarIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';

const Card = ({ createdAt, title, author, format, review, rating }) => {
  return (
    <Box
      mx="auto"
      px={8}
      py={6}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue('white', 'gray.600')}
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          {createdAt}
        </chakra.span>
        <Badge px={3} py={1} colorScheme="purple" rounded="md">
          {format}
        </Badge>
      </Flex>

      <Box mt={2}>
        <Heading
          fontSize="2xl"
          color={useColorModeValue('gray.700', 'white')}
          fontWeight="700"
        >
          {title}
        </Heading>
        <Text
          fontSize="sm"
          color={useColorModeValue('gray.700', 'gray.300')}
          fontWeight="400"
        >
          {author}
        </Text>
        <chakra.p mt={4} color={useColorModeValue('gray.600', 'gray.300')}>
          {review}
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={8}>
        <ButtonGroup variant="outline" spacing={2}>
          <Button colorScheme="purple" leftIcon={<ViewIcon />}>
            View
          </Button>
          <Button leftIcon={<EditIcon />}>Edit</Button>
        </ButtonGroup>

        <Flex alignItems="center">
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < Math.floor(rating / 2) ? 'purple.300' : 'gray.300'}
                />
              ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
