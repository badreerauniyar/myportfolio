
import "./toggle.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"
export const Toggle = () => {
    const theme=useContext(ThemeContext);
    const hancleClick=()=>{
        theme.dispatch({type:"TOGGLE"});
    }
    return (
        <div className="t">
           <img src={sun} alt="" className="t-icon" />
           <img src={moon} alt="" className="t-icon" />
            <div className="t-button" onClick={hancleClick} style={{left:theme.state.darkMode ? 0: 25}}></div>
        </div>
    )
}
