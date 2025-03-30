import Footer from "../../Components/Footer/Footer"
import Header_standar from "../../Components/Header_standar/Header_standar"
import RssReader from "../../Components/rssReader/rssReader"
import UpdatesDbComponent from "../../Components/UpdatesDbComponent/Updatesdbcomponent"

function UpdatesDbComponent_Page() {

    return [


        <>

            <Header_standar/>
          <UpdatesDbComponent/>
            <RssReader/>
            <Footer/>
            
        </>
    ]

}

export default UpdatesDbComponent_Page