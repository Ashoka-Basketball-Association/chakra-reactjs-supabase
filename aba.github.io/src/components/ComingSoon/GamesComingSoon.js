
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Link
  } from '@chakra-ui/react';
  import { InlineWidget } from "react-calendly";
  
  export default function ComingSoon(props) {
    return (
      <>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              ABA 6.0<br />
              <Text as={'span'} color={'green.400'}>
                {props.title}
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg', md: 'xl' }}>
             {props.desc}
            </Text>
            <Link href={"/"}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Return to Home
            </Button>
            </Link>
          </Stack>
        </Container>
      </>
    );
  }
  