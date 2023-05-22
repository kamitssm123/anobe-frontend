import "./style.css"
import { IoMdMenu } from "react-icons/io";
import { VscArrowLeft } from "react-icons/vsc";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAttachFile } from "react-icons/md"
import ProfileCard from "../ProfileCard";

const ChatPage = () => {
    return(
        <div className="chat-container">
            <div className="side-pane">
                <div className="top-bar">
                    <IoMdMenu size={30} />
                    <div>Anobe</div>
                    <BiSearch size={30} />
                    <BiDotsVerticalRounded size={30} />
                </div>
                <div className="profile-container">
                    <ProfileCard />
                </div>
            </div>
            <div className="body-container">
                <div className="body-top-bar">
                    <div className="body-left-box">
                        <VscArrowLeft size={30} style={{padding: 5}}/>
                        <div className="img-box" />
                        <div className="name-last-seen-text" style={{padding: 5}}>
                            <div className="profile-name-text" style={{fontSize: 12, fontWeight: "bold"}}>amit</div>
                            <div className="last-seen-text" style={{fontSize: 10}}>online</div>
                        </div>
                    </div>
                    <div className="body-right-box" >
                        <AiOutlineHeart size={30} style={{padding: 10}}/>
                        <MdOutlineAttachFile size={30} style={{padding: 10}}/>
                        <BiDotsVerticalRounded size={30} style={{padding: 10}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;