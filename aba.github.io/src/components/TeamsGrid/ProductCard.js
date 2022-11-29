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
        auto
        shadow onClick={handler}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={props.team.logo}
              alt={props.team.name}
            //   cursor="pointer"
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
      {/* <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" b size={24}>
            {props.team.name}
        </Text>
      </Modal.Header>
      <Modal.Body>
        {props.team.desc}
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
        {props.team.players.map((player) => (
            <Table.Row>
                <Table.Cell><Text b>{player.name}</Text></Table.Cell>
                <Table.Cell>{player.tier}</Table.Cell>
                <Table.Cell textAlign="center">{player.price}</Table.Cell>
            </Table.Row>
        )
        )}
      </Table.Body>
    </Table>
      </Modal.Body>
    </Modal> */}
    </>
    )
  }




