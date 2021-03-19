import React, {useState, useEffect} from 'react'
import SemiSection from './SemiSection'
import axios from 'axios';

function Section() {

    const [section, setSection] = useState([]);

    useEffect(() => {
    async function request() {
        await axios.get('https://api.genshin.dev/').then((res) => {
            console.log(res) 
            setSection(res.data.types)
        }).catch((err) => {
            console.log(err)
        }).then(console.log(section))}
        
        request();
        }, [])

    return (
        <div>
        {section.map(x => {
            return(
                <SemiSection key={x} data={x}/>
            )
        })}
        </div>
    )
}

export default Section
