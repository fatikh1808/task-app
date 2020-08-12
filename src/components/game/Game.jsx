import React from "react";
import Blocks from "../blocks/Blocks";

const Game = (props) => {

    const {
        setActive1,
        setActive2,
        setActive3,
        setActive4,
        active1,
        active2,
        active3,
        active4,
        Numb,
        SecondNumb,
        Kim
    } = props;

    const setFalse = () => {
        setActive1(0);
        setActive2(0);
        setActive3(0);
        setActive4(0);
    }

    if (active1 && active2 === 1) {
        return (
            <div>
                <h1>you win</h1>
                <button onClick={setFalse}>try again</button>
                <Blocks
                    active1={active1}
                    active2={active2}
                    active3={active3}
                    active4={active4}
                    Numb={Numb}
                    SecondNumb={SecondNumb}
                    setActive1={() => {
                    }}
                    setActive2={() => {
                    }}
                    setActive3={() => {
                    }}
                    setActive4={() => {
                    }}
                />
            </div>
        )
    } else if (Kim === 2) {
        return (
            <div>
                <h1>You lose</h1>
                <button onClick={setFalse}>try again</button>
                <Blocks
                    active1={active1}
                    active2={active2}
                    active3={active3}
                    active4={active4}
                    Numb={Numb}
                    SecondNumb={SecondNumb}
                    setActive1={() => {
                    }}
                    setActive2={() => {
                    }}
                    setActive3={() => {
                    }}
                    setActive4={() => {
                    }}
                />
            </div>
        )
    } else {
        return (
            <div>
                <h1>Game</h1>
                <Blocks
                    active1={active1}
                    active2={active2}
                    active3={active3}
                    active4={active4}
                    Numb={Numb}
                    SecondNumb={SecondNumb}
                    setActive1={setActive1}
                    setActive2={setActive2}
                    setActive3={setActive3}
                    setActive4={setActive4}
                />
            </div>
        )
    }
}
export default Game;