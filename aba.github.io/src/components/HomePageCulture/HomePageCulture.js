import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
} from '@chakra-ui/react';
import { MdSportsBasketball } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { IoIosBulb } from 'react-icons/io';

// interface FeatureProps {
//   title: string;
//   text: string;
//   icon: ReactElement;
// }

const Feature = ({ title, text, icon }) => {
  return (
    <Stack py={12} px={6} border={"2px"} borderRadius={"10px"}>
      <Flex
        w="full"
        h="full"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#eee;'}
        mb={1}
        textAlign="center"
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign="center" fontSize={"2xl"}>{title}</Text>
      <Text color={'gray.600'} textAlign="center">{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
      <Box background="#eee;" py={6}>
        <Container maxW={'10xl'}>
      <Box p={4} style={{ paddingBottom: '50px', background: '' }}>
        <Heading
          as="h2"
          size="3xl"
          mt={3}
          mb={12}
          style={{ textAlign: 'center', paddingBottom: '20px' }}
        >
          ABA Culture
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={
              <Icon as={MdSportsBasketball} w={10} h={10} color={'black'} />
            }
            title={'Basketball'}
            text={
              'ABA promotes sport at Ashoka and produces an environment for everyone to compete in different aspects of a sporting league ranging from scouting, auctioning, playing and hosting.'
            }
          />
          <Feature
            icon={<Icon as={IoIosBulb} w={10} h={10} color={'black'} />}
            title={'Team Strategy'}
            text={
              'Team owners plan and scout players to bid for at the auction, later to manage and coach at the matchoffs. Understanding personnel, bidding strategy and substitutions - all are part of the game'
            }
          />
          <Feature
            icon={<Icon as={RiTeamFill} w={10} h={10} color={'black'} />}
            title={'Community'}
            text={
              'Ashokans come together for ABA weekend in large numbers and tune in to watch their friends play and manage their respective 3v3 teams. Everyone loves a good show of hoop skills!'
            }
          />
        </SimpleGrid>
      </Box>
      </Container>
    </Box>
    
  );
}
