import { supabase } from './initialize'
import { useState, useEffect } from 'react'


export const Gallery = () => {

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
            price,
            team(
                name
            )`)
            
            console.log(error)
            var arr = []
    
            for (var i in test) {
                console.log(test[i].team)
                if (test[i].team.name === "Test"){
                    arr.push(test[i])
                }
            }
        
            setData(arr);
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
        return <h3>Loading ...</h3>;
    }

    return (
        <div>
        {data.map(item => (
        <>
            <h1>{item.name}</h1>
            <h1>{item.team.name}</h1>
        </>
        ))}
        </div>
    )
}
