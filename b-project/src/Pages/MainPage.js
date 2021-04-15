import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function MainPage() {
    const [section, setSection] = useState([]);
    const [input, setInput] = useState("");
    const [drop, setDrop] = useState("anime");
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const changeDrop = (e) => {
        const uwu = e.target.value
        setDrop(uwu.toLowerCase())
    }

    useEffect(() => {
     const request = () => {
        if (input.length >= 3){
        axios.get(`https://api.jikan.moe/v3/search/${drop}?q=${input}`).then((res) => {
            setSection(res.data.results)
        }).catch((err) => {
            setSection([])
        })}else{
            setSection([])
        }
    }
    request();
    }, [input, setInput, drop, setDrop])
    return (
<div className="py-2 h-100 min-h-screen bg-gray-300 px-2">
    <div className="max-w-md min-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg"></div>            
        <div className="flex justify-center items-center">
            <div className="max-w-md p-4">
                <h1 className="text-center font-bold text-4xl py-2 ">Kobi Weeb Lookup</h1>
                <div className="flex">
                    <input onChange={changeInput} value={input} type="text" className="w-full h-12 rounded-l focus:outline-none px-3 focus:shadow-md" placeholder="Search..." /> 
                    <select onChange={changeDrop} defaultValue={drop} className="rounded-r px-2 border-l-2 border-gray-100 outline-none">
                        <option>Anime</option>
                        <option>Manga</option>
                    </select>
                </div>

                <ul>
            {section.map(data => (
                <Link to={`/${drop}/${data.mal_id}`}>
                    <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div className="flex ml-2"> <div className="rounded-full relative overflow-hidden w-12 h-12 border border-black"><img src={data.image_url} className="rounded-full" alt={data.title} /></div>
                            <div className="flex flex-col ml-2"> <span className="font-medium truncate w-60 text-black">{data.title}</span> <span className="text-sm text-gray-400 truncate w-80">{data.synopsis}</span> </div>
                        </div>
                    </li>
                </Link>
            ))}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default MainPage
