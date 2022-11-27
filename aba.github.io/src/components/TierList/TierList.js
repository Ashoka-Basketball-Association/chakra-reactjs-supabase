import { Card, Grid, Row, Text, Container, Col } from "@nextui-org/react";
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

export function TierList() {

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
    <Grid.Container gap={1} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={12} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.pic}
                objectFit="cover"
                width="100%"
                height={340}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
            <Col>
              <Row wrap="wrap" justify="space-between" align="center" white-space="nowrap">
                <Text><b>{item.name}</b> - {item.position}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.tier}
                </Text>
              </Row>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text h4>
                {item.desc}
                </Text>
                {/* <Text css={{ color: "$accents10", fontWeight: "$bold", fontSize: "$sm" }}>
                  {item.position}
                </Text> */}
            </Row>
            </Col>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
      
    </Grid.Container>
    <br>
    </br>
    <br></br>
    </Container>
  );
}
