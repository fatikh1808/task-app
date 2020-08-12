import React, {useState} from "react";
import Game from "./components/game/Game";


const App = () => {

    const [active1, setActive1] = useState(0)
    const [active2, setActive2] = useState(0)
    const [active3, setActive3] = useState(0)
    const [active4, setActive4] = useState(0)

    let Numb = 1;
    let SecondNumb = 2;

    let Kim = [active4, active3, active2, active1].filter(item => item !== 0).length


    return (
        <div>
            <Game
                active1={active1}
                active2={active2}
                active3={active3}
                active4={active4}
                setActive1={setActive1}
                setActive2={setActive2}
                setActive3={setActive3}
                setActive4={setActive4}
                Numb={Numb}
                SecondNumb={SecondNumb}
                Kim={Kim}
            />
        </div>
    )
}

export default App;