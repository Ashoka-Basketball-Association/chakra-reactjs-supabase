import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcIdea, FcInTransit } from 'react-icons/fc';
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
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box background="#eee;">
      <Box p={4} style={{ paddingBottom: '50px', background: '' }}>
        <Heading
          as="h2"
          size="3xl"
          mt={6}
          mb={2}
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
              'Team owners plan and scout players to bid for at the auction, later to manage and coach at the matchoffs.'
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
    </Box>
  );
}
