import Section from './components/Section'
import {useState} from 'React'
import axios from 'axios'

axios.get('https://api.genshin.dev/').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

function App() {
  return (
    <div>
      <Section />
    </div>
  );
}

export default App;
