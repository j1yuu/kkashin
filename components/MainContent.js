import FirstScreen from "./FirstScreen";
import AboutMain from "./AboutMain";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Footer from "./Footer";

export default function MainContent() {
    return (
        <main className="maincontent">

            <FirstScreen />
            <AboutMain />
            <Skills />
            <Portfolio />
            <Contacts />
            <Footer />

            <style jsx>{`
                .maincontent {
                    width: 100%;
                    padding-left: 25%;
                }

                @media (max-width: 48em) {
                    .maincontent {
                        padding-left: 0;
                    }
                }
            `}</style>
        </main>
    );
}