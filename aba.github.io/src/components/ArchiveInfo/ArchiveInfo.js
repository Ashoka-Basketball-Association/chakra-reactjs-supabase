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
  IoCashOutline,
  IoDiamondOutline,
  IoInvertModeOutline,
  IoLogoAppleAr,
} from 'react-icons/io5';
import aba5 from '../../assets/img/aba5.jpeg';
import four from '../../assets/img/4.0.JPG';
import svb from '../../assets/img/svb.jpeg';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export function ArchiveInfo() {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={svb}
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
              rounded={'md'}
            >
              Monsoon 2022
            </Text>
            <Heading>ABA 6.0</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              The latest ABA was unlike ever before. Straight from the auction,
              a number of promising teams emerged and took the court by storm.
              It was a 3-day marathon of non-stop fun, eventful upsets and
              cutthroat competiton
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={IoMedalOutline} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Winner - Escobar'}
              />
              <Feature
                icon={<Icon as={IoPodium} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={"Men's MVP - Ahmed Mahmoud"}
              />
              <Feature
                icon={<Icon as={IoPodium} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={"Non-Cis Men's MVP - Aditi Narunkar"}
              />
              <Feature
                icon={
                  <Icon as={IoDiamondOutline} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Best Defensive Player - Siddh Veer Bakshi'}
              />
              <Feature
                icon={
                  <Icon
                    as={IoInvertModeOutline}
                    color={'green.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Most Promising Player - Aadityan Iyer'}
              />{' '}
              <Feature
                icon={
                  <Icon as={IoLogoAppleAr} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Unsung Hero - Harrsh Dewan'}
              />
              <Feature
                icon={
                  <Icon
                    as={IoCalendarNumber}
                    color={'purple.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'December 9th, 10th, 11th'}
              />
              <Feature
                icon={
                  <Icon as={IoCashOutline} color={'blue.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'1st Place Price - 35k'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box background="#eee" py={12}>
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
                rounded={'md'}
              >
                Spring 2022
              </Text>
              <Heading>ABA 5.0</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                ABA 5.0 took place in March of 2022. It was the first ABA to
                take place after the pandemic, and it exceeeded every
                expectation.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoMedalOutline}
                      color={'yellow.500'}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={'Winner - Mylapore Machas'}
                />
                <Feature
                  icon={<Icon as={IoPodium} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={"Men's MVP - Arjun Khanna"}
                />
                <Feature
                  icon={<Icon as={IoPodium} color={'orange.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('orange.100', 'orange.900')}
                  text={"Non Cis Men's MVP - Harshita Bedi"}
                />
                <Feature
                  icon={
                    <Icon
                      as={IoCalendarNumber}
                      color={'purple.500'}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'March 12th, 13th, 14th'}
                />
                <Feature
                  icon={
                    <Icon as={IoCashOutline} color={'blue.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('blue.100', 'blue.900')}
                  text={'1st Place Price - 25k'}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={aba5}
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        // background="#eee"
        py={12}
      >
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={four}
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
                rounded={'md'}
              >
                Monsoon 2019
              </Text>
              <Heading>ABA 4.0</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                The last ABA to take place before the pandemic, ABA 4.0
                showcased the talents of all Ashokan ballers - leading to an
                intense two days of competiton.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoMedalOutline}
                      color={'yellow.500'}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={'Winner - Lavar Balls'}
                />
                <Feature
                  icon={<Icon as={IoPodium} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={"Men's MVP - Dhruv Khandelwal"}
                />
                <Feature
                  icon={<Icon as={IoPodium} color={'orange.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('orange.100', 'orange.900')}
                  text={"Non-Cis Men's MVP - Joyelle Ndikumana"}
                />
                <Feature
                  icon={
                    <Icon
                      as={IoCalendarNumber}
                      color={'purple.500'}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'November 15th, 16th'}
                />
                <Feature
                  icon={
                    <Icon as={IoCashOutline} color={'blue.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('blue.100', 'blue.900')}
                  text={'1st Place Price - 20k'}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
