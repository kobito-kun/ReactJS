import {useState, useEffect} from 'react'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {

  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);

    const submitText = () => {
      console.log(input)
      const newstuff = {
          'name': input,
          'id' : Math.random() * 100,
      }
      setTodos(old => [...old, newstuff])

      setInput('')
    }

  useEffect(() => {
    if(String(input).length === 5){
      submitText();
    } 
  }, [input, submitText])

  function clear(){
    setTodos([])
  }

  return (
    <div>
      <h1>Todo list testing:</h1>
      <Input input={input} setInput={setInput} setTodos={setTodos} />
      <button onClick={clear}>Clear</button>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
