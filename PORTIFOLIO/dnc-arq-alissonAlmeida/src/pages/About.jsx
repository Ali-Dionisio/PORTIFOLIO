import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import TextAbout from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"

function About() {
    return (
        <>
          <Header/>
            <Banner title="About" image="about.jpg"/>
            <div className="container">
                <TextAbout/>            
            </div>
            <Footer/>
        </>
    )
}
export default About