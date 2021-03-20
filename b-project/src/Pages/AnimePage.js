import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AnimePage({match}) {

    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function request() {
            console.log("Start")
            await axios.get(`https://api.jikan.moe/v3/${match.params.type}/${match.params.mal_id}`)
            .then((res) => {
                setData(res.data)
                setLoaded(true);
            })
            .catch((err) => {
                setData({})
            })}
            request();
    }, [])

    if(match.params.type === 'anime' && loaded === true){
        return (
            <div>
                <img src={data.image_url} alt={data.title} />
                <h2>{data.title} | {data.title_japanese} </h2>
                <h2>Air: {data ? data.aired.string : <span>None</span> }</h2>
                <h2>Episodes: {data.episodes}</h2>
                <h2>Status: {data.status}</h2>
                <p>{data.synopsis}</p>
            </div>
    )}
    return(
        <div>Not loaded yet uwu...</div>
    )
}

export default AnimePage
