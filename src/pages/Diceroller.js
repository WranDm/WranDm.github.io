import React, { useState } from 'react'
import './diceroller.css'


const Diceroller = () => {
  const [state, setState] = useState({
    numberOfDice: null,
    rolls: [],
    rollSum: null
  });

  {/*let setState = ({numberOfDice, rolls, rollSum}) => {
    state.numberOfDice = numberOfDice;
    state.rolls = rolls;
    state.rollSum = rollSum;
  };*/}

  let diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    console.log(numberOfDice);
    setState({
      numberOfDice,
      rolls,
      rollSum
    });
    console.log(state);
  };

  return (
    <div className="diceroller"> 
      <div className="rpg"><h4>Playing Tabletop RPGs recently has me constantly needing dice on hand. For now, here's a handful of six-sided ones:</h4></div>
      <div className="buttons">
        {[1, 2, 3, 4, 5].map(number => {
          let text = number === 1 ? "die" : "dice";
          return (
            <button
              key={number}
              onClick={() => diceRoll(number)}
              className="button"
            >
              {number} {text}
            </button>
          );
        })}
      </div>
      <div>
        {
            <h2>
              Roll Total: <span className="sum">{state.rollSum}</span> /{" "}
              {state.numberOfDice * 6} ({state.numberOfDice} dice)
            </h2>
          
        }
      </div>
    </div>
  )
}




export default Diceroller