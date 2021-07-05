import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import waifu from '../assets/waifu.png'

function AnimePage({match}) {

    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    const request = () => {
        axios.get(`https://api.jikan.moe/v3/${match.params.type}/${match.params.mal_id}`)
        .then((res) => {
            setData(res.data)
            setLoaded(true);
        })
        .catch((err) => {
            setData({})
    })}

    useEffect(() => {
        console.log("fetching...")
        request();
        // eslint-disable-next-line
    }, [])

    if(match.params.type === 'anime' && loaded === true){
        return (
            <div className="bg-gray-300 min-h-screen pb-4">
                <Link to="/" className="fixed top-2 uppercase bg-gray-600 px-4 py-2 text-white font-bold left-2">Return</Link>
                <div className="p-4">
                    <img src={data.image_url} alt={data.title} className="mx-auto h-96 shadow-lg" />
                </div>
                <div className="border border-gray-400 shadow-lg rounded p-2 mx-4">
                    <h2 className="font-thin text-4xl text-center">{data.title} | {data.title_japanese} </h2>
                    <div className="flex justify-center flex-wrap my-4">
                        {data.genres.map(x => ( <div className="rounded-full mx-1 shadow-lg bg-gray-600 inline-block px-2 text-white" key={x.mal_id}>{x.name}</div> ))}
                    </div>
                    <p className="mb-4">{data.synopsis}</p>
                    <h2><span className="font-bold">Air / Aired: </span>{data ? data.aired.string : <span>None</span> }</h2>
                    <h2><span className="font-bold">Episode/s: </span>{data.episodes}</h2>
                    <h2><span className="font-bold">Status: </span>{data.status}</h2>
                    <h3><span className="font-bold">Rating: </span> {data.rating}</h3>
                    <h3><span className="font-bold">Score: </span> {data.score}/10 out of {data.scored_by}</h3>
                </div>
            </div>
    )}else if(match.params.type === 'manga' && loaded === true){
        return (
            <div className="bg-gray-300 min-h-screen pb-4">
                <Link to="/" className="fixed top-2 uppercase bg-gray-600 px-4 py-2 text-white font-bold left-2">Return</Link>
                <div className="p-4">
                    <img src={data.image_url} alt={data.title} className="mx-auto h-96 shadow-lg" />
                </div>
                <div className="border border-gray-400 shadow-lg rounded p-2">
                    <h2 className="font-thin text-4xl text-center">{data.title} | {data.title_japanese} </h2>
                    <div className="flex justify-center flex-wrap my-4">
                        {data.genres.map(x => ( <div key={x.mal_id} className="rounded-full mx-1 shadow-lg bg-gray-600 inline-block px-2 text-white">{x.name}</div> ))}
                    </div>
                    <p className="mb-4">{data.synopsis}</p>
                    <h2><span className="font-bold">Published: </span>{data ? data.published.string : <span>None</span> }</h2>
                    <h2><span className="font-bold">Volume/s & Chapter/s: </span>{data.volumes}Vol. | {data.chapters}Chps.</h2>
                    <h2><span className="font-bold">Status: </span>{data.status}</h2>
                    <h3><span className="font-bold">Score: </span> {data.score}/10 out of {data.scored_by}</h3>
                </div>
            </div>
    )}
    return(
        <>
            <div className="h-screen bg-gray-300 text-white flex justify-center items-center text-center text-6xl font-bold">
                <img src={waifu} alt="waifu" className="h-40" />
                <span className="animate-pulse">
                    Loading....
                </span>
            </div>
        </>
    )
}

export default AnimePage
