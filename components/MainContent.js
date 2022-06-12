import FirstScreen from "./FirstScreen";
import AboutMain from "./AboutMain";

export default function MainContent() {
    return (
        <main className="maincontent">

            <FirstScreen />
            <AboutMain />

            <style jsx>{`
                .maincontent {
                    width: 100%;
                    padding-left: 25%;
                }
            `}</style>
        </main>
    );
}