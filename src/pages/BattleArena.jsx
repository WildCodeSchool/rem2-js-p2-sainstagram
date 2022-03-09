import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import NavProfile from '../components/NavProfile'
import Player from '../components/Player'
import data from '../assets/data';
import users from '../assets/users';
import './BattleArena.css'

function rollDice(max = 6) {
    return 1 + Math.floor(Math.random() * max)
}
function get_data(player1, player2) {
    function get_user_by_id(id) {
        console.log(users);
        let infos = users.filter(item => item.id === parseInt(id))[0];
        return infos;
    }
    let p1 = {}, p2 = {};
    if (player2 === 'null') {
        while (JSON.stringify(p2) === JSON.stringify({})) {
            let player = Math.floor(Math.random() * users.length);
            if (player !== parseInt(player1)) {
                p2 = get_user_by_id(player);
            }
        }
        p1 = get_user_by_id(player1);
    } else {
        p1 = data[player1];
        p2 = data[player2];
        console.log([player2]);
    }
    return { 'p1': { ...p1, 'health': 100, 'life': 100 }, 'p2': { ...p2, 'health': 100, 'life': 100 } };
}

const BattleArena = () => {
    const params = useParams();
    let players_data = get_data(params.player1, params.player2);
    const [player1, setPlayer1] = React.useState(players_data['p1']);
    const [player2, setPlayer2] = React.useState(players_data['p2']);
    const [p1ClassName, setP1ClassName] = React.useState("");
    const [p2ClassName, setP2ClassName] = React.useState("");
    const [turn, setTurn] = useState(0);
    const [log, setLog] = useState('');

    function round(player1, player2, turn) {
        function playerAttack(player) {
            if (player.abilities.length) {
                let weapon = player.abilities[rollDice(player.abilities.length) - 1];
                return `${player.name} attaque avec ${weapon}!`
            } else {
                return `${player.name} attaque !`
            }
        }
        setP1ClassName('');
        setP2ClassName('');
        let attack, defense, result, message = [];
        if (turn === 0) {
            message.push(playerAttack(player1));
        } else {
            message.push(playerAttack(player2));
        }
        attack = rollDice(18);
        defense = rollDice(12);
        if (attack > defense) {
            result = -20;
            if (turn === 0) {
                setP2ClassName('hit');
                setPlayer2({ ...player2, health: player2.health + result })
            } else {
                setPlayer1({ ...player1, health: player1.health + result })
                setP1ClassName('hit');
            }
            message.push(`touché !`)
        } else {
            message.push(`raté !`)
        }
        return message.join('\n')
    }

    const step = () => {
        setLog(round(player1, player2, turn));
        setTurn(+!turn); //switch between 0 and 1
    }
    return (
        <div className="BattleArena">
            <NavProfile />
            <div className='Arena'>
                <div className='players'>
                    <Player {...player1} className={`PlayerCard ${p1ClassName}`} />
                    <div className="VSblock">
                        <div className="VStitleArena">
                            BATTLE ARENA
                        </div>
                        <div className="VS">
                            Vs
                        </div>
                    </div>
                    <Player {...player2} className={`PlayerCard ${p2ClassName}`} />
                </div>
                <div className='pannel'>
                    <div className='log'>{log}</div>
                    {player1.health && player2.health ? <button onClick={step}>Next turn</button> : ''}
                </div>
            </div>
        </div>
    )
}

export default BattleArena