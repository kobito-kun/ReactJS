import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AnimePage({match}) {

    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const request = () => {
            axios.get(`https://api.jikan.moe/v3/${match.params.type}/${match.params.mal_id}`)
            .then((res) => {
                setData(res.data)
                setLoaded(true);
            })
            .catch((err) => {
                setData({})
            })}
            request();
    },)

    if(match.params.type === 'anime' && loaded === true){
        return (
            <div className="bg-gray-300 min-h-screen grid lg:grid-cols-2 p-8">
                <div>
                    <img src={data.image_url} alt={data.title} style={{width: "40%"}} className="block mx-auto py-2" />
                    <iframe title={data.title} src={data.trailer_url} className="block mx-auto py-2" />
                </div>
                <div className="border border-gray-400 shadow-lg rounded p-2">
                    <h2 className="font-bold text-4xl">{data.title} | {data.title_japanese} </h2>
                    <h2><span className="font-bold">Air / Aired: </span>{data ? data.aired.string : <span>None</span> }</h2>
                    <h2><span className="font-bold">Episode/s: </span>{data.episodes}</h2>
                    <h2><span className="font-bold">Status: </span>{data.status}</h2>
                    <p className="py-4">{data.synopsis}</p>
                    <h2 className="font-bold">Genres:</h2>
                    <h3>{data.genres.map(x => (
                        <div key={x.mal_id}>{x.name}</div>
                        ))}</h3>
                    <h3><span className="font-bold">Rating: </span> {data.rating}</h3>
                    <h3><span className="font-bold">Score: </span> {data.score}/10 out of {data.scored_by}</h3>
                </div>
            </div>
    )}else if(match.params.type === 'manga' && loaded === true){
        return (
            <div className="bg-gray-300 min-h-screen grid grid-cols-2 p-8">
                <div>
                    <img src={data.image_url} alt={data.title} style={{width: "40%"}} className="block mx-auto py-2" />
                </div>
                <div className="border border-gray-400 shadow-lg rounded p-2">
                    <h2 className="font-bold text-4xl">{data.title} | {data.title_japanese} </h2>
                    <h2><span className="font-bold">Published: </span>{data ? data.published.string : <span>None</span> }</h2>
                    <h2><span className="font-bold">Volume/s & Chapter/s: </span>{data.volumes}Vol. | {data.chapters}Chps.</h2>
                    <h2><span className="font-bold">Status: </span>{data.status}</h2>
                    <p className="py-4">{data.synopsis}</p>
                    <h2 className="font-bold">Genres:</h2>
                    <h3>{data.genres.map(x => (
                        <div key={x.mal_id}>{x.name}</div>
                        ))}</h3>                    
                    <h3><span className="font-bold">Score: </span> {data.score}/10 out of {data.scored_by}</h3>
                </div>
            </div>
    )}
    return(
        <div className="text-center text-6xl font-bold">Not loaded yet uwu... or invalid parameters.</div>
    )
}

export default AnimePage
