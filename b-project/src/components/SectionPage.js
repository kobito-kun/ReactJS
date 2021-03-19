import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Item from './Item';

function SectionPage({match}) {

    const [section, setSection] = useState([]);
    
    useEffect(() => {
    async function request() {
        await axios.get(`https://api.genshin.dev/${match.params.id}`).then((res) => {
        console.log(res.data) 
        setSection(res.data)
        }).catch((err) => {
        console.log(err)
        })};
        request();
        }, [])

    return (
        <div>
            {section.map(x => (
                <Item data={x} type={match.params.id} />
            ))}
        </div>
    )
}

export default SectionPage
