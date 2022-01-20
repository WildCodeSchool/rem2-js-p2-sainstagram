import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import './BattleArena.css'
//import Header from '../components/Header'
import NavProfile from '../components/NavProfile'
import Player from '../components/Player'
import data from '../assets/data';
import users from '../assets/users';

function rollDice(max=6) {
    return 1 + Math.floor(Math.random()*max)
}
function get_data(player1, player2) {
    console.log('get_data()');
    function get_user_by_id(id){
        let infos = users.filter(item=>item.id===parseInt(id))[0];
        //console.log(infos);
        return infos;
    }
    let p1 = {}, p2={};
    if (player2==='null') {
        player2 = Math.floor(Math.random()*users.length);
        p1 = get_user_by_id(player1);
        p2 = get_user_by_id(player2);
    }else{
        //console.log(player1, player2);
        p1 =  data[player1];
        p2 = data[player2];
    }
    return {'p1':{...p1, 'health':100, 'life':100}, 'p2':{...p2, 'health':100,'life':100}};
}
const BattleArena = () => {
    const params = useParams();
    let players_data = get_data(params.player1, params.player2);
    const [player1, setPlayer1] = React.useState(players_data['p1']);
    const [player2, setPlayer2] = React.useState(players_data['p2']);
    const [turn, setTurn] = useState(0);
    //const [battleState, setBattleState] = React.useState();
    const [log, setLog] = useState('');
    const [looser, setLooser] = useState(null);

    function round(player1, player2, turn) {
        let attack, defense, result, message=[];
        if (turn===0) {
            message.push(`${player1.name} attaque !`)
        }else {
            message.push(`${player2.name} attaque !`)
        }
        attack = rollDice(18);
        defense = rollDice(12);
        if (attack>defense){
            result = -20;
            if (turn===0){
                setPlayer2({...player2, health:player2.health+result})
            }else{
                setPlayer1({...player1, health:player1.health+result})
            }
            message.push(`touché !`)
        }else{
            message.push(`raté !`)
        }
        return message.join('\n')
    }
    
    const step = () => {
        setLog(round(player1, player2, turn));
        setTurn(+!turn); //switch between 0 and 1
    }
    return (
        <div className='BattleArena'>
            {/*<Header/>*/}
            <NavProfile />
            <div className='Arena'>
                <Player {...player1} />
                <div className='log'>{log}</div>
                <Player {...player2} />
            </div>
            {player1.health && player2.health ? <button onClick={step}>Next turn</button> : ''}
        </div>
    )
}

export default BattleArena