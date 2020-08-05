import React, { useState } from 'react'

export default function Calculator() {
    
    const [ output, setOutput ] = useState('0') 
    const [ isClear, setClear ] = useState(true)

    const handleDigit = ({ target: { innerText }}) => {
        setOutput((output === '0') ? innerText : output + innerText)
    }

    return (
       <div className='calculator'> 
        <div className='calc-display'>{output}</div>
        <div className='calc-buttons'>
            <button className='calc-button x3 func' id='ac' type='button'>AC</button>
            <button className='calc-button func' id='div'>÷</button>
            <button className='calc-button digit' id='7' onClick={handleDigit}>7</button>
            <button className='calc-button digit' id='8' onClick={handleDigit}>8</button>
            <button className='calc-button digit' id='9' onClick={handleDigit}>9</button>
            <button className='calc-button func' id='mul'>x</button>
            <button className='calc-button digit' id='4' onClick={handleDigit}>4</button>
            <button className='calc-button digit' id='5' onClick={handleDigit}>5</button>
            <button className='calc-button digit' id='6' onClick={handleDigit}>6</button>
            <button className='calc-button func' id='sub'>-</button>
            <button className='calc-button digit' id='1' onClick={handleDigit}>1</button>
            <button className='calc-button digit' id='2' onClick={handleDigit}>2</button>
            <button className='calc-button digit' id='3' onClick={handleDigit}>3</button>
            <button className='calc-button func' id='add'>+</button>
            <button className='calc-button x2 digit' id='0' onClick={handleDigit}>0</button>
            <button className='calc-button func' id='dot'>.</button>
            <button className='calc-button func' id='eql'>=</button>
        </div>
       </div> 
    )
}