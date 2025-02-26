import Characters_cards from "../../Components/Characters_cards/Characters_cards";
import "./Characters_page.css"
import Footer from "../../Components/Footer/Footer";
import Header_character from "../../Components/Header_character/Header_character";

function Characters_page() {
    

    return(


        <>
        <Header_character/>
        <Characters_cards></Characters_cards>
        <Footer/>
        </>
    )
}

export default Characters_page;