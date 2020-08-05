import React, { useState } from 'react'

export default function Calculator() {
    
    const [ output, setOutput ] = useState('0') 
    const [ isClear, setClear ] = useState(true)

    const handleDigit = ({ target: { innerText }}) => {
        setOutput((output === '0') ? innerText : output + innerText)
    }

    const handleFunc = ({ target: { innerText }}) => {
        // Don't update if display is clear.
        if (output === '0') return
        // Don't update if last input is another function
        if (isNaN(output.slice(-1))) return
        // Allow only one decimal
        if (output.includes('.') && innerText === '.') return

        // Update display
        setOutput((output === '0' || isNaN(output.slice(-1))) ? output : output + innerText)
    }

    const handleEqual = () => {
        // Don't update if last input is another function
        if (isNaN(output.slice(-1))) return
        setOutput(eval(output).toString())
    }
    
    const handleClear = () => {
        setOutput('0')
    }

    return (
       <div className='calculator'> 
        <div className='calc-display'>{output}</div>
        <div className='calc-buttons'>
            <button className='calc-button x3 func' id='ac' onClick={handleClear}>AC</button>
            <button className='calc-button func' id='div' onClick={handleFunc}>/</button>
            <button className='calc-button digit' id='7' onClick={handleDigit}>7</button>
            <button className='calc-button digit' id='8' onClick={handleDigit}>8</button>
            <button className='calc-button digit' id='9' onClick={handleDigit}>9</button>
            <button className='calc-button func' id='mul' onClick={handleFunc}>*</button>
            <button className='calc-button digit' id='4' onClick={handleDigit}>4</button>
            <button className='calc-button digit' id='5' onClick={handleDigit}>5</button>
            <button className='calc-button digit' id='6' onClick={handleDigit}>6</button>
            <button className='calc-button func' id='sub' onClick={handleFunc}>-</button>
            <button className='calc-button digit' id='1' onClick={handleDigit}>1</button>
            <button className='calc-button digit' id='2' onClick={handleDigit}>2</button>
            <button className='calc-button digit' id='3' onClick={handleDigit}>3</button>
            <button className='calc-button func' id='add' onClick={handleFunc}>+</button>
            <button className='calc-button x2 digit' id='0' onClick={handleDigit}>0</button>
            <button className='calc-button func' id='dot' onClick={handleFunc}>.</button>
            <button className='calc-button func' id='eql' onClick={handleEqual}>=</button>
        </div>
       </div> 
    )
}