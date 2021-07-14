import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useLocation } from 'react-router-dom'
import Qs from 'qs'
import Header from './Header';
import "./app.css";
import googleBar from "./image/google.png"
function GoogleBar() {

    const location = useLocation();
    const Query = Qs.parse(location.search.slice(1));

    const [count, setCount] = useState();
    const [data, getData] = useState();
    // console.log(count)
    const url = `https://www.google.com/search?q=${Query}`;
    const getDataBySubmitted = () => {
        getData(count);
        console.log(data);
    }
    return (
        <div>
            <Header />
            <div className="googlebarFirst">
                <img src={googleBar} alt="googleBar" className="googleIconBar" />
            </div>
            <form action="/google" className="formFirst">
                <SearchIcon className="SearchIcon" />
                <input type="text" name="search" value={count} id="" className="searchText" placeholder="" onChange={(e) => setCount(e.target.value)} />
                <MicIcon className="MicIcon" title="Speak Now" />
                {/* apply for google search */}
                <br />
                <br />
                <input type="submit" className="googleSearch" value="Google Search" onClick={getDataBySubmitted} />
                <button className="googleSearch">
                    <a href="">Feeling Lucky</a>
                </button>
            </form>

        </div >
    )
}

export default GoogleBar
