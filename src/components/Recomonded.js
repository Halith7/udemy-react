//Recommenend component

import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg";

function Recomonded(){
    return (
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit!</p>

        <div class="recommended__container">
            <div class="course-card">
                <img src={one} alt="one"></img>
                <h3>2024 Python data visualization masterclass</h3>
                <p>Col steele</p>
                <p>4.0 ⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
            <div class="course-card">

                <img src={two} alt="two"></img>
                <h3>Web Development 2024</h3>
                <p>Itachi</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={three} alt="three" ></img>
                <h3>Mater UI/UX Desigining with Figma</h3>
                <p>Jiraya</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={four} alt="four"></img>
                <h3>Basic to advance programming with EMC</h3>
                <p>Minato</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}
export default Recomonded