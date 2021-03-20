import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AnimePage({match}) {

    const [data, setData] = useState({});
    
    useEffect(() => {
        async function request() {
            console.log("Start")
            await axios.get(`https://api.jikan.moe/v3/${match.params.type}/${match.params.mal_id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setData({})
            })}
            request();
            console.log(data);
    }, [])

    if(match.params.type === 'anime'){
        return (
            <div>
        <img src={data.image_url} alt={data.title} />
        <h2>{data.title}</h2>
        <h2>Episodes: {data.episodes}</h2>
        <div>
            <h4>Ending themes</h4>
            { data && data.ending_themes ? <div>{data.ending_themes.forEach(element => {
                <p>{element}</p>
            })}</div> : <div>Not Loaded yet...</div>}
        </div>
    </div>
    )}
    return(
        <div>Not complete yet uwu...</div>
    )
}

export default AnimePage
