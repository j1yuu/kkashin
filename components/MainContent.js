import FirstScreen from "./FirstScreen";
import AboutMain from "./AboutMain";
import Skills from "./Skills";

export default function MainContent() {
    return (
        <main className="maincontent">

            <FirstScreen />
            <AboutMain />
            <Skills />

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