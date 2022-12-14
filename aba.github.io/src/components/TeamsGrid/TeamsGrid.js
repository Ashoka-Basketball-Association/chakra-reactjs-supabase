import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
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

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].id === obj.id) {
            return true;
        }
    }

    return false;
}

export function TeamsGrid(){

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
            pic,
            price,
            team(
                *
            )
            `)  
            var teams = [];
                
                if (error){
                    console.log(error);
                }
            for (var i in test){
                if(!containsObject(test[i].team, teams)){
                    var obj = test[i].team;
                    console.log(obj)
                    obj.players = []
                    teams.push(obj)
                }
            }

            teams.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            
            for (var j in test){
                try{
                    teams[test[j].team.id].players.push(test[j])
                }   
                catch(err){
                    console.error(err)
                }
            }

            setData(teams);
            setLoading(false);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const getData2 = async () => {
        try{
            let { data: test, error } = await supabase
            .from('teams')
            .select('*')  
            var teams = [];
                
                if (error){
                    console.log(error);
                }
            
            setData(test);
            setLoading(false);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getData2();
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

    return(
        <Box
        maxW="7xl"
        mx="auto"
        px={{
        base: '4',
        md: '8',

        }}
        py={{
        base: '6',
        md: '8',
        }}
    >
        <ProductGrid>
        {data.map((team) => (
            <ProductCard key={team.id} team={team} />
        ))}
        </ProductGrid>
    </Box>
    )
    }