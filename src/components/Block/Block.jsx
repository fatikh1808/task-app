import React from 'react';
import s from './Block.module.css'


const Block = (props) => {
    const {active, setActive, numb} = props;

    let divStyleRe = {
        backgroundColor: "black"
    };

    {
        console.log(divStyleRe.backgroundColor)
    }

    if (active !== 0) {
        if (numb === 1){
            divStyleRe.backgroundColor = "yellow";
        } else {
            divStyleRe.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16)
        }
        return <div className={s.block}
                    onClick={() => setActive(numb)}
                    style={divStyleRe}
        >

        </div>
    } else {
        return (
            <div
                className={s.block}
                onClick={() => setActive(numb)}
            >
            </div>
        )
    }
}

export default Block;