import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../all.css';

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
        let cancel = false;
    async function request() {
        if (input.length >= 3 || !cancel){
        await axios.get(`https://api.jikan.moe/v3/search/${drop}?q=${input}`).then((res) => {
            setSection(res.data.results)
        }).catch((err) => {
            setSection([])
        })}else{
            setSection([])
        }
    }
        cancel = true;

        console.log(section)

        request();
    }, [input, setInput, drop, setDrop])
    return (
<div class="py-2 h-100 min-h-screen bg-gray-300 px-2">
    <div class="max-w-md min-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg"></div>            
        <div class="flex justify-center items-center">
            <div class="max-w-md p-4">
                <h1 class="text-center font-bold text-4xl py-2 ">Kobi Weeb Lookup</h1>
                <div class="flex">
                    <input onChange={changeInput} value={input} type="text" class="w-full h-12 rounded-l focus:outline-none px-3 focus:shadow-md" placeholder="Search..." /> 
                    <select onChange={changeDrop} default={drop} class="rounded-r px-2 border-l-2 border-gray-100 outline-none">
                        <option>Manga</option>
                        <option selected="selected">Anime</option>
                    </select>
                </div>

                <ul>
            {section.map(data => (
                <Link to={`/${drop}/${data.mal_id}`}>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <div class="rounded-full relative overflow-hidden w-12 h-12 border border-black"><img src={data.image_url} class="rounded-full" alt={data.title} /></div>
                            <div class="flex flex-col ml-2"> <span class="font-medium truncate w-60 text-black">{data.title}</span> <span class="text-sm text-gray-400 truncate w-80">{data.synopsis}</span> </div>
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
