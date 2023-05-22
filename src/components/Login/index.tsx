import "./style.css"
import { AiFillWechat } from "react-icons/ai"

const Login = () => {
    return (
        <div className="main-container">
            <AiFillWechat size={70} color="white" style={{marginTop: 40}}/>
            <div className="main-heading">Welcome to Anobe</div>
            <div className="sub-text">Chat anonymously and meet new people</div>
            <div style={{marginTop: 40}}>
                <div className="check-container">
                    <input type="checkbox" checked={false} className="check-box"/>
                    <div className="checkbox-text">I understand that sharing of inappropriate content will not be tolreated</div>
                </div>
                <div className="check-container">
                    <input type="checkbox" checked={false} className="check-box"/>
                    <div className="checkbox-text">I confirm that I'm 18 years old or over</div>
                </div>
                <div className="check-container">
                    <input type="checkbox" checked={false} className="check-box"/>
                    <div className="checkbox-text">I accept the Privacy Policy & Terms of Use</div>
                </div>
            </div>
            <button className="login-btn" style={{marginTop: 30, backgroundColor: "#0072bb"}}>CONTINUE WITH FACEBOOK</button>
            <button className="login-btn" style={{marginTop: 10, backgroundColor: "red"}}>CONTINUE WITH GOOGLE</button>
            <div className="note-text"><span>*</span>Don't worry, you will remain anonymous.</div>
            <div className="disclaimer-text" style={{marginTop: 40}}>We don't post anything to Facebook or Google</div>
            <div className="disclaimer-text"style={{marginTop: 10, marginBottom: 10}}><u>Privacy Policy & Terms of Use.</u></div>
        </div>
    )
}


export default Login;