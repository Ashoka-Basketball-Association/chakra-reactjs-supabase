import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoMedalOutline,
    IoPodium,
    IoCalendarNumber,
  } from 'react-icons/io5';
  import aba5 from "../../assets/img/aba5.jpeg"
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export function ArchiveInfo() {
    return (
    <>
      <Container maxW={'5xl'} py={24}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Spring 2022
            </Text>
            <Heading>ABA 5.0</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              ABA 5.0 took place in March of 2022. It was the first ABA to take place after the pandemic, and it exceeeded every expectation.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoMedalOutline} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Winner - Mylapora Machas'}
              />
              <Feature
                icon={<Icon as={IoPodium} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'MVP - Arjun Khanna'}
              />
              <Feature
                icon={
                  <Icon as={IoCalendarNumber} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'March 12th, 13th, 14th'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={aba5
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Box background="#eee" py={12}>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={aba5
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Spring 2022
            </Text>
            <Heading>ABA 5.0</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              ABA 5.0 took place in March of 2022. It was the first ABA to take place after the pandemic, and it exceeeded every expectation.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoMedalOutline} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Winner - Mylapora Machas'}
              />
              <Feature
                icon={<Icon as={IoPodium} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'MVP - Arjun Khanna'}
              />
              <Feature
                icon={
                  <Icon as={IoCalendarNumber} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'March 12th, 13th, 14th'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </Box>
      </>
    );
  }