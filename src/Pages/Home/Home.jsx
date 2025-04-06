import Cards from "../../Components/Cards/Cards";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";
import Header_home from "../../Components/Header_home/Header_home";
import Honkai_description from "../../Components/Honkai_description/Honkai_description";
import Honkai_trailer from "../../Components/HonkaiTrailer/HonkaiTrailer";
import Slider_images from "../../Components/Slider_images/Slider_images";

function Home_Page() {

    return [


        <>


            <Header_home />
            <Honkai_description />
            <hr></hr>
            <Cards />
            <hr></hr>
            <Honkai_trailer />
            <hr></hr>
            <CharacterList></CharacterList>

            <Slider_images

                img1="\img\slider_image1.jpg"
                img2="\img\slider_image2.jpg"
                img3="\img\slider_image3.jpg"
                img4="\img\slider_image4.jpg"

            />

            <Footer></Footer>


        </>
    ]

}

export default Home_Page