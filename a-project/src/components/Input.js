import React from 'react'

function Input({input, setInput, setTodos}) {

    function changeText(e){
        setInput(e.target.value)
    }

    function submitText(e){
        e.preventDefault();
        console.log(input)
        const newstuff = {
            'name': input,
            'id' : Math.random() * 100,
        }
        setTodos(old => [...old, newstuff])

        setInput('')
    }
    return (
        <div>
            <input type="text" value={input} onChange={changeText} />
            <input type="submit" onClick={submitText} />
        </div>
    );
}

export default Input;
