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
        let cancel = false;
    async function request() {
        if (input.length >= 3 || !cancel){
        await axios.get(`https://api.jikan.moe/v3/search/${drop}?q=${input}`).then((res) => {
            setSection(res.data.results)
        }).catch((err) => {
            setSection([])
        })}}
        cancel = true;

        request();
    }, [input, setInput, drop, setDrop])
    return (
        <div className="text-center">
            <h1>{input}</h1>
            <div>
                <input className="border-2 border-black rounded" type="text" onChange={changeInput} value={input} />
                <select onChange={changeDrop} default={drop}>
                    <option>Manga</option>
                    <option selected="selected">Anime</option>
                </select>
            </div>
            {section.map(result => (
                <Link to={`/${drop}/${result.mal_id}`}>
                    <div className="flex justify-center text-left"><img className="w-10" src={result.image_url} alt={result.title} />{result.title}</div>
                </Link>
            ))}
        </div>
    )
}

export default MainPage
