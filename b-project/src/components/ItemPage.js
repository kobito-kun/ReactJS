import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ItemPage({match}) {

    const [items, setItems] = useState({});

    useEffect(() => {
    async function request() {
        await axios.get(`https://api.genshin.dev/${match.params.id}/${match.params.idItem}`).then((res) => {
        console.log(res.data) 
        setItems(res.data)
        }).catch((err) => {
        console.log(err)
        }).then(console.log(items))}

        request();
        }, [])
        return (
        <div>
            {Object.keys(items).map((item, index) => (
                <div key={index}>{item} : {items["name"]}</div>
            ))}
        </div>
    )
}

export default ItemPage
