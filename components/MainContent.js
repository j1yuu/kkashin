import FirstScreen from "./FirstScreen";

export default function MainContent() {
    return (
        <main className="maincontent">

            <FirstScreen />

            <style jsx>{`
                .maincontent {
                    width: 100%;
                    padding-left: 25%;
                }
            `}</style>
        </main>
    );
}