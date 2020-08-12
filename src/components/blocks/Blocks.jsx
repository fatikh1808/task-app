import React from "react";
import Block from "../block/Block";

const Blocks = (props) => {

    const {
        active1,
        active2,
        active3,
        active4,
        setActive1,
        setActive2,
        setActive3,
        setActive4,
        Numb,
        SecondNumb
    } = props;

    return (
        <div>
            <div>
                <Block
                    active={active1}
                    setActive={setActive1}
                    numb={Numb}
                />
                <Block
                    active={active2}
                    setActive={setActive2}
                    numb={Numb}
                />
            </div>
            <div>
                <Block
                    active={active3}
                    setActive={setActive3}
                    numb={SecondNumb}
                />
                <Block
                    active={active4}
                    setActive={setActive4}
                    numb={SecondNumb}
                />
            </div>
        </div>
    )
}

export default Blocks;