import React, { useState } from 'react'

export default function Calculator() {
    
    const [ output, setOutput ] = useState('0') 
    const [ isClear, setClear ] = useState(true)

    return (
       <div className='calculator'> 
        <div className='calc-display'>{output}</div>
        <form className='calc-buttons'>
            <button className='calc-button x3 func' id='ac' type='button'>AC</button>
            <button className='calc-button func' id='div'>÷</button>
            <button className='calc-button digit' id='7'>7</button>
            <button className='calc-button digit' id='8'>8</button>
            <button className='calc-button digit' id='9'>9</button>
            <button className='calc-button func' id='mul'>x</button>
            <button className='calc-button digit' id='4'>4</button>
            <button className='calc-button digit' id='5'>5</button>
            <button className='calc-button digit' id='6'>6</button>
            <button className='calc-button func' id='sub'>-</button>
            <button className='calc-button digit' id='1'>1</button>
            <button className='calc-button digit' id='2'>2</button>
            <button className='calc-button digit' id='3'>3</button>
            <button className='calc-button func' id='add'>+</button>
            <button className='calc-button x2 digit' id='0'>0</button>
            <button className='calc-button func' id='dot'>.</button>
            <button className='calc-button func' id='eql'>=</button>
        </form>
       </div> 
    )
}