import { Card, Grid, Row, Text, Container, Col } from "@nextui-org/react";
import { supabase } from '../../supabase/initialize'
import { useState, useEffect } from 'react'
import { Puff } from  'react-loader-spinner'
import styled from 'styled-components';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
      
          setData(test);
          setLoading(false);
          // team name = test[0].name; or test.name
          // logo = test[0].logo; or test.logo
          // desc = test[0].desc; or test.desc
          // setData(test);
          // setLoading(false);
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
    <Container lg css = {{ backgroundColor: "#eee", borderRadius: "20px" }} >
    <Grid.Container gap={2} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
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
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    Tier {item.tier}
                </Text>
              </Row>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text h4>
                {item.desc}
                </Text>
                <Text css={{ color: "$accents10", fontWeight: "$bold", fontSize: "$sm" }}>
                  {item.position}
                </Text>
            </Row>
            </Col>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </Container>
  );
}
