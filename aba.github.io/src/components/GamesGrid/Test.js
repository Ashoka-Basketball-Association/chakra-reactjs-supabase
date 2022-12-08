import { Card, Grid, Row, Text, Container, Avatar, Spacer } from "@nextui-org/react";
import { supabase } from '../../supabase/initialize'
import { useState, useEffect } from 'react'
import { Puff } from  'react-loader-spinner'
import styled from 'styled-components';

const Wrapper = styled.div`
  .wrapper{
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
      try{
          let { data: test, error } = await supabase
          .from('players')
          .select(`
          name,
          desc,
          tier,
          position,
          pic
          `)  
          console.log(test)
          console.log(error)

          test.sort((a,b) => (a.tier > b.tier) ? 1 : ((b.tier > a.tier) ? -1 : 0))
      
          setData(test);
          setLoading(false);
      }
      catch (err) {
          console.error(err.message);
      }
  }

  useEffect(() => {
      getData();
  }, []);


  if (loading) {
    return (
        <Wrapper>
            <div className="wrapper">
                <Puff
                height="200"
                width="200"
                radisu={1}
                color="#1b0c7a"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
        </Wrapper>
    )
}

  return (
    <Container lg >
    <Grid.Container gap={2} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={12} sm={6} key={index}>
          <Game />
        </Grid>
      ))}
      
    </Grid.Container>
    <br>
    </br>
    <br></br>
    </Container>
  );
}


const Game = (props) =>{
    return(
        <Card variant="bordered" isHoverable isPressable>
             <Card.Header>
            <Text><b>Game 1</b> - Group Stage</Text>
          </Card.Header>
          <Card.Divider />
         <Card.Body>
            <Container>
            <Row>
            <Grid>
                <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                css={{ size: "$20" }}
                />
            </Grid>
            <Text>Boobs</Text>
            <Grid>
                <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                css={{ size: "$20" }}
                />
            </Grid>
            </Row>
            </Container>
            
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Text>Top Scorer - <b>Player X</b></Text>
          </Card.Footer>
        </Card>
    )
}