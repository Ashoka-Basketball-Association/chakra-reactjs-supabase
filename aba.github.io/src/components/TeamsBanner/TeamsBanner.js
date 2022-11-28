import {
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Text,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  export const TeamsBanner = () => (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: '0',
        lg: '12',
      }}
      py={{
        base: '0',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        spacing={{
          base: '0',
          lg: '20',
        }}
      >
        <Box
          width={{
            lg: 'sm',
          }}
          transform={{
            base: 'translateY(-50%)',
            lg: 'none',
          }}
          bg={{
            base: useColorModeValue('red.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          px={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              lg: '10',
            }}
          >
            <Stack
              spacing={{
                base: '2',
                lg: '4',
              }}
            >
              <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                ABA 6.0
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Competing Teams
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Text color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
                Find out which teams are competing for the ABA 6.0 championship, and pick a team to root for.
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="https://i.pinimg.com/736x/c2/dc/a7/c2dca77d9b6defb9f259e89c14282154--life-list-team-logo.jpg"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="600px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  )