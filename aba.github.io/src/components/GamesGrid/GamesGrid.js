import { Card, Grid, Row, Text, Container, Avatar, Spacer , Link} from "@nextui-org/react";
import { supabase } from '../../supabase/initialize'
import { useState, useEffect } from 'react'
import { Puff } from  'react-loader-spinner'
import styled from 'styled-components';
import "./BoxScores.css"

const Wrapper = styled.div`
  .wrapper{
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export function GamesGrid() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
      try{
          let { data: test, error } = await supabase
          .from('matches')
          .select(`
          team1(
            *
          ),
          team2(
            *
          ),
          score,
          winner,
          game_number,
          date
          `)  
          console.log(error)

          for (var i in test) {
            if(test[i].winner===test[i].team2.id) {
              var temp = test[i].team1
              test[i].team1 = test[i].team2
              test[i].team2 = temp
            }
          }

          test.reverse();
      
          console.log(test)

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
    <>
    <Grid.Container gap={2} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={12} sm={6} key={index}>
          <Game item={item}/>
        </Grid>
      ))}
      
    </Grid.Container>
    <br>
    </br>
    <br></br>
    </>
  );
}


const Game = (props) =>{
  const date = convDate(props.item.date);
    return(
        <Card variant="bordered" isHoverable isPressable onPressEnd={(e) => (window.open(`/games/${props.item.game_number}`,"_self"))}>
             <Card.Header>
            <Text><b>Game {props.item.game_number}</b></Text>
          </Card.Header>
          <Card.Divider />
         <Card.Body>
          <div className="game">
            <Grid>
                <Avatar
                src={props.item.team1.logo}
                css={{ size: "$20" }}
                />
            </Grid>
            <Text b h1
        size={32}>{props.item.score}</Text>
            <Grid>
                <Avatar
                src={props.item.team2.logo}
                css={{ size: "$20" }}
                />
            </Grid>
            
          </div>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Text><b>{date}</b></Text>
          </Card.Footer>
        </Card>
    )
}

const convDate = (date) => {
  var dateParts = date.split("-");
  console.log(dateParts);
  // month is 0-based, that's why we need dataParts[1] - 1
  var dateObject = new Date(dateParts[0], dateParts[1]-1, dateParts[2]); 
  console.log(dateObject);
  dateObject = dateObject.toString();
  dateObject = dateObject.split(" ");
  dateObject=dateObject.slice(0,4)
  dateObject = dateObject.join(" ");
  return dateObject;

}