import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import logo from '../../assets/img/ABA.png';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('white.100', 'whiteAlpha.100')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image src={logo} height={24} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/auction'}>Auction</Link>
          <Link href={'/teams'}>Teams</Link>
          <Link href={'/games'}>Games</Link>
          {/* <Link href={'/highlights'}>Highlights</Link> */}
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/sponsors'}>Sponsors</Link>
          <Link href={'/archive'}>Archive</Link>
          <Link href={'/court-booking'}>Court Booking</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>Made with ❤️ by Pranav Iyengar and Siddh Veer Bakshi</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton> */}
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/aba_ashoka/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
