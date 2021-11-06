import { Link, Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Stack as="footer" align="center" justify="center" p={4}>
      <Text fontSize="sm" color="gray.600">
        Copyright &copy; 2021{' '}
        <Link href="https://github.com/ross-crawford" isExternal>
          Excerpt
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
