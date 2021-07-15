import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Qs from 'qs';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import GoogleVal from "./GoogleVal"
import Header from './Header'
import { Link } from 'react-router-dom'
import Tab from './Tab'
import googleBar from "./image/google.png"

function Google(props) {
    // getdata from url;
    let location = useLocation();
    let { search } = Qs.parse(location.search.slice(1));
    const [Query, setQuery] = useState(search);

    // pass urlValue to parent component
    props.adContactHandler(search)

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
                        {/* <ClearIcon className="clearIcon" title="Speak Now" /> */}
                        <SearchIcon className="SearchcIconrigth" title="Speak Now" />
                    </span>
                </form>
            </div>

            <Tab />

            <GoogleVal />

        </div>
    )
}

export default Google
