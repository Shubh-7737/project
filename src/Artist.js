import "./Style.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";
import ImageSlider from "./ImageSlider";
const Artist = () => {
return (
	<div className="artist" >
	<ImageSlider images={images} className="artist1"/>
</div>
)
}
export default Artist;