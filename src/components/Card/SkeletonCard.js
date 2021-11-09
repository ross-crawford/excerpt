import {
  Box,
  Flex,
  useColorModeValue,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const SkeletonCard = () => {
  return (
    <Box
      mx="auto"
      px={8}
      py={6}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue('white', 'gray.600')}
      minW="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Skeleton height="16px" width="80px" />
        <Skeleton height="30px" width="60px" />
      </Flex>

      <Box mt={4}>
        <Skeleton height="30px" width="160px" />
        <Skeleton height="10px" width="100px" marginTop={2} />
        <SkeletonText noOfLines={8} mt={6} />
      </Box>

      <Flex justifyContent="flex-start" alignItems="center" mt={8}>
        <Skeleton height="30px" width="80px" marginEnd={4} />
        <Skeleton height="30px" width="80px" />
      </Flex>
    </Box>
  );
};

export default SkeletonCard;
