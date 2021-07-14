import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Qs from 'qs';
import ReactHtmlParser from 'react-html-parser';
const GoogleVal = (props) => {

    let location = useLocation();
    let { search } = Qs.parse(location.search.slice(1));
    const limit = 50;
    const page = 1;

    const [state, setState] = useState([]);
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${search}&pageNumber=${page}&pageSize=${limit}&autoCorrect=true`
    const getgoogledata = async () => {

        let res = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2feae67a2emsh92d0de018ae315ep15fecajsn4b297966b8de",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }
        })
        // const url = `https://bing-web-search1.p.rapidapi.com/search?q=${search}&freshness=day&answerCount=${page}&textFormat=Raw&safeSearch=Off&count=${limit}&mkt=en-us`
        // const getgoogledata = async () => {
        //     let res = await fetch(url, {
        //         "method": "GET",
        //         "headers": {
        //             "x-bingapis-sdk": "true",
        //             "x-rapidapi-key": "2feae67a2emsh92d0de018ae315ep15fecajsn4b297966b8de",
        //             "x-rapidapi-host": "bing-web-search1.p.rapidapi.com"
        //         }
        //     })
        let data = await res.json();
        let val = data.value;
        setState(val);

    }

    useEffect(() => {
        getgoogledata();
    }, [])

    return (

        < div className="putAllData" >
            <div className="TimeResult setdata">
                <p>
                    About 6,83,00,00,000 results (0.87 seconds)
                </p>
            </div>
            {
                state.map((element) => {
                    // console.log(element)
                    return (
                        < div className="setdata">

                            <div className="content">
                                <p>
                                    <a href={element.url} >

                                        {element.url}
                                    </a>
                                </p>
                                <h2 className="title">
                                    <a href={element.url}>{element.title}</a>
                                </h2>
                                <p className="bodyContent">
                                    {ReactHtmlParser(element.snippet)}
                                </p>
                            </div>
                        </div>

                    )
                })
            }
        </div >





    )

}
export default GoogleVal
