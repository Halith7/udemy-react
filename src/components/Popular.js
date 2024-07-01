import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg";

function Popular () 
 {
    return (
        <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pick the Best</p>
        <div class="popular__container">
            <div class="course-card">
            <img src={one} alt="one"></img>                           
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
            <img src={three} alt="three"></img>                           
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
            <div class="course-card">
            <img src={three} alt="five"></img>                           
                <h3>Basic to advance programming with EMC</h3>
                <p>Minato</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={three} alt="six"></img>                           
                <h3>Basic to advance programming with EMC</h3>
                <p>Minato</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={three} alt="seven"></img>                           
                <h3>Basic to advance programming with EMC</h3>
                <p>Minato</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={three} alt="eight"></img>                           
                <h3>Basic to advance programming with EMC</h3>
                <p>Minato</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499.00 <del>1999</del></p>
            </div>
        </div>
        </div>
    )
}


export default Popular