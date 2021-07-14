import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import ShowImage from "./ShowImage"
import Header from './Header'
import { Link } from 'react-router-dom'
import Tab from './Tab'
import "./app.css";
import googleBar from "./image/google.png"

function Image(props) {
    const [Query, setQuery] = useState(props.imageVal);

    return (
        <div>
            <Header />
            <div className="flex_div">
                <div className="googlebarSecond d_second">
                    <Link to="/"><img src={googleBar} alt="googleBar" className="googleIconBarSecond" /></Link>
                </div>

                <form action="/google" className="formSecond d_second">
                    <SearchIcon className="SearchIcon" />
                    <input type="text" name="search" id="" value={Query} className="searchTextSecond" placeholder="" onChange={(e) => setQuery(e.target.value)} />
                    <span>
                        <MicIcon className="MicIconSecond" title="Speak Now" />
                        <SearchIcon className="SearchcIconrigth" title="Speak Now" />
                    </span>
                </form>
            </div>

            <Tab />
            <ShowImage image={Query} />
        </div>
    )
}

export default Image
