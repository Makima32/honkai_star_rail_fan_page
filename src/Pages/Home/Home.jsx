import Cards from "../../Components/Cards/Cards";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Honkai_description from "../../Components/Honkai_description/Honkai_description";
import Honkai_trailer from "../../Components/HonkaiTrailer/HonkaiTrailer";

function Home_Page() {

    return [


        <>


            <Header />
            <Home />
            <Honkai_description />
            <hr></hr>
            <Cards />
            <hr></hr>
            <Honkai_trailer />
            <hr></hr>
            <CharacterList></CharacterList>
            <Footer></Footer>
        </>
    ]

}

export default Home_Page