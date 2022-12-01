import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue,
    VisuallyHidden,
    chakra,
    Link,
  } from '@chakra-ui/react';
  import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
  
import styled from 'styled-components';

const Wrapper = styled.div`
    .wrap{
        background-color: #eee;
    }
`

const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={12}
        h={12}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        fontSize="2xl"
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

export default function SponsorHeader() {
  return (
    <Box textAlign="center" py={100} px={6}>
      {/* <StarIcon boxSize={'50px'} color={'yellow.500'} /> */}
      <Heading as="h2" size="2xl" mt={6} mb={2}>
        Our Sponsors
      </Heading>
      <br></br>

      <Text color={'gray.500'} fontSize="lg">
        ABA would not be possible without our amazing sponsors. Find out more about the brands and affiliated companies that make the event possible.
      </Text>
    </Box>
  );
}
  
  export function Sponsors() {
    return (
        <>
        <SponsorHeader />
        <Wrapper>
            <div className ="wrap">
            <SponsorSection title="Hype Fly India" subtitle = "Premium and Limited Sneakers and Streetwear" event="Raffle" about = "HypeFly India Products Private Limited is your go-to place for all things sneaker and streetwear. Whether you eat, sleep and breathe sneakers or are just looking to up your streetwear game, we have something in store for everyone. Founded in 2019, we hope to bring you the freshest brands, in premium quality, from across the world straight to the comfort of your home. Shop from a wide range of brands, available online at our store with fast & safe delivery." instagram="https://www.instagram.com/hypefly.in/?hl=en" facebook="https://www.facebook.com/hypefly.in/" linkedin="https://www.linkedin.com/company/hype-fly-india/about/" link="https://www.hypefly.co.in" />
            </div>
        </Wrapper>
       
        </>
    );
  }


  export function SponsorSection(props) {
    return (
        <>
            <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://i.imgur.com/hfHuWfz.png'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 6 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {props.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
                mt={1}>
                    {props.subtitle}
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'xl'}
                mt={1}>
                    <b>Event - {props.event}</b>
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'} color="gray.500">
                {props.about}
                </Text>
                <Stack direction={'row'} spacing={6}>
            <SocialButton label={'LinkedIn'} href={props.linkedin}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Facebook'} href={props.facebook}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={props.instagram}>
              <FaInstagram />
            </SocialButton>
          </Stack>
                <Link  href={props.link} target="_blank"  w={'full'}>
                <Button
              rounded={'none'}
              w={'full'}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              VISIT
            </Button>
            </Link>
            <Stack direction={'row'} spacing={6}>
          </Stack>
              </VStack>
            </Stack>
    </Stack>
        </SimpleGrid>
      </Container>       
        </>
    );
  }