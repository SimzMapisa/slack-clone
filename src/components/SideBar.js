import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcons from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"

// Import Components 
import SideBarOption from "./SideBarOption"

const SideBar = () => {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Atonce Media HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Simba Mapisa
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon}  title="Threads" />
            <SideBarOption Icon={InboxIcon}  title="Meansions & Reactions" />
            <SideBarOption Icon={DraftsIcon}  title="Saved Items" />
            <SideBarOption Icon={BookmarkBorderIcon}  title="Channel Browser" />
            <SideBarOption Icon={PeopleAltIcon}  title="People & User Groups" />
            <SideBarOption Icon={AppsIcons}  title="Apps" />
            <SideBarOption Icon={FileCopyIcon}  title="File Browser" />
            <SideBarOption Icon={ExpandLessIcon}  title="Show Less" />

            <hr />

            <SideBarOption Icon={ExpandMoreIcon}  title="Channels" />

            <hr />

            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />
        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: #ffffff;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: #fff;
        border-radius: 999px;
    }
`

const SideBarInfo = styled.div`
    flex: 1;

    > h2{
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center; 
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        color: green;
        margin-top: 1px;
        margin-right: 2px;
    }
`