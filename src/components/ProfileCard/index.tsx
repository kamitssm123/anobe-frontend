import "./style.css"
import { TiTick } from "react-icons/ti"

const ProfileCard = () => {
    return (
        <div className="main-container">
            <div className="image-box"/>
            <div className="info-container">
                <div className="name-last-text-box">
                    <div className="name-text">amit</div>
                    <div className="last-text-time">18.53</div>
                </div>
                <div className="sub-conatiner">
                    <TiTick size={15} />
                    <div className="last-text">kya haal hain bhai</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;