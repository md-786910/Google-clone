import React from 'react';
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import RoomIcon from '@material-ui/icons/Room';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import "./app.css";
function Tab(props) {
    return (
        <div>
            <div className="tab">
                <ul>
                    <NavLink to="/google" activeClassName="active_class">
                        <li>
                            <SearchIcon className="sameForAllIcon" fontSize="small" />
                            All
                        </li>
                    </NavLink>
                    <NavLink to="/image" activeClassName="active_class">
                        <li>
                            <ImageSearchIcon className="sameForAllIcon" fontSize="small" />
                            Images
                        </li>
                    </NavLink>
                    <li>
                        <RoomIcon className="sameForAllIcon" fontSize="small" />
                        Maps
                    </li>
                    <li>
                        <AnnouncementIcon className="sameForAllIcon" fontSize="small" />
                        News
                    </li>
                    <li>
                        <QueuePlayNextIcon className="sameForAllIcon" fontSize="small" />
                        Videos
                    </li>
                    <li>
                        <MoreVertIcon className="more" fontSize="small" />
                        <div className="liMore">
                            More
                        </div>
                    </li>
                </ul>
                <div className="tools">
                    <button className="toolsBtn">Tools</button>
                </div>
            </div>
            <hr />
            <br />
        </div>
    )
}

export default Tab
