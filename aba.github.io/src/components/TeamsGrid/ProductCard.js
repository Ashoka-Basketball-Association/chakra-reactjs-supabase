import {
    AspectRatio,
    Box,
    Image,
    Skeleton,
    Stack,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Modal, Text } from "@nextui-org/react";
  import { Table } from "@nextui-org/react";

  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const { name, imageUrl } = product
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return (
        <>
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
        {...rootProps}
        auto
        shadow onClick={handler}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
        </Box>

      </Stack>
      <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" b size={24}>
            A2Z
        </Text>
      </Modal.Header>
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adip Lorem ips Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        <br></br>
        <br></br>
        <Text b size={20}>
            Players
        </Text>
        <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Tier</Table.Column>
        <Table.Column>Price</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Siddh Veer Bakshi</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Krishna Bala</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>40</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Dhananjay Dogra</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>60</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Arjun Khanna</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>115</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
      </Modal.Body>
    </Modal>
    </>
    )
  }




