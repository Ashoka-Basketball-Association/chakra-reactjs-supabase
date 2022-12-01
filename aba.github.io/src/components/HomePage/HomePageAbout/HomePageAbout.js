import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Checkbox, Input, Modal, Popover, Row } from '@nextui-org/react';
import pic from '../../../assets/img/pic1.jpg';
import { useToast } from '@chakra-ui/react';

export default function HomePageAbout() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    console.log('closed');
    setVisible(false);
    toast({
      title: 'Message sent.',
      description: "We've sent your message over to ABA Management.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  const toast = useToast();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              About Us
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {/* Our Team */}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Ashoka's infamous 3v3 basketball tournament where ashokans come to
            show off their hoop skills! Compete as a player or team owner and
            bring your A game!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handler}
            >
              Contact Us
            </Button>
            <Modal
              closeButton
              preventClose
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" style={{ fontSize: '20px' }}>
                  Contact Us
                  <Text b size={18}></Text>
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  // contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Phone Nunber"
                  // contentLeft={<Password fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Comment"
                  // contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  {/* <Checkbox> */}
                  <Text size={14}></Text>
                  {/* </Checkbox> */}
                  <Text size={14}></Text>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button auto flat color="error" onClick={closeHandler}>
                  Close
                </Button>
                <Button auto onClick={closeHandler}>
                  Send
                </Button>
              </Modal.Footer>
            </Modal>
            <Popover isBordered disableShadow>
              <Popover.Trigger>
                <Button rounded={'full'}>How To Register</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Text
                  css={{ h1: '$20' }}
                  style={{ padding: '15px', fontSize: '20px' }}
                >
                  Registrations are currently closed for ABA 6.0
                </Text>
              </Popover.Content>
            </Popover>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={pic} />
      </Flex>
    </Stack>
  );
}
