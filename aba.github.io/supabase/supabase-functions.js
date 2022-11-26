import { supabase } from '../../supabase/initialize'
import { useState, useEffect } from 'react'


// get all teams details

const teams = async () => {
    try{
        let { data: test, error } = await supabase
        .from('teams')
        .select('*');

        return test;
        // team name = test[i].name;
        // logo = test[i].logo;
        // desc = test[i].desc;
        // setData(test);
        // setLoading(false);
    }
    catch (err) {
        console.error(err.message);
    }
}

// get certain team details

const specificTeam = async (teamName) => {
    try{
        let { data: test, error } = await supabase
        .from('teams')
        .select('*')
        .eq('name', teamName)

        return test;
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

// get all players in a team

export const playersInTeam = async (teamName) => {
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
        
        var arr = []

        for (var i in test) {
            console.log(test[i].team)
            if (test[i].team.name === "Test"){
                arr.push(test[i])
            }
        }
    
        // setData(arr);
        // setLoading(false);
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