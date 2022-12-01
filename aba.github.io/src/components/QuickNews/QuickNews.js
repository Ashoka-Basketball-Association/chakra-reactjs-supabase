import {
    Alert,
    AlertIcon,
    Container,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  export function QuickNews(){
    return(
        <Container maxW={'7xl'}>
            <Alert background-color="#eee;">
                <AlertIcon />
                Chakra is going live on August 30th. Get ready!
            </Alert>
        </Container>
    )
  }