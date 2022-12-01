import {
    Box,
    Flex,
    Heading,
    Image,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import archivebanner from "../../assets/img/archivebanner.jpeg"
  
  export const ArchiveHeader = () => (
    <Box background="#eee;" pb={2}>
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
            lg: '36',
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
              <Heading size="2xl" color={useColorModeValue('red.500', 'red.300')}>
                ABA Archive
              </Heading>
              <Heading size="lg" fontWeight="normal">
                View details on ABA competitions of the past.
              </Heading>
            </Stack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src={archivebanner}
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
    </Box>
  )