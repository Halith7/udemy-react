//Silder
import salesBanner from "../assets/images/sale-image.jpeg"

function Slider()
{
    return (
       
    <div class="sale-image">
    <img src={salesBanner} alt="Sale image"></img>
    <div class="sale-image__offer">
        <h2>Udemy flash sale! 24 hours to save.</h2>
        <p>Get the top couse for just 499.  Just one day to save but
            a life time to learn courses
        </p>

    </div>

</div>
    )
}
export default Slider