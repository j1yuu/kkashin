
export default function AboutMain() {
    return (
        <div className="about" id="aboutMain">
            <div className="main-container about__container">
                <h2 className="main-title about__title">About me</h2>
                <p className="about__text">HI, I`m <b>Konstantin</b> and I`m glad that you`ve visited my page. <br />
                    I`m <b>Junior Frontend-developer</b> and I made this website all by my own (except the design - I`ve looked for some references on the internet).<br />
                    I wrote it using Next.JS framework for React.JS in case that I need to show my English skills and coding skills somewhere.
                    <br />
                    <br />
                    Now, ending all preludes, I want to say a few words about my background: I`m currently a student of St.Petersburg State Institute of Technology on the faculty of biotechnology ending first course. I do sports (my favourites are volleyball and calisthenics) 1 to 4 times per week, just to feel that I keep my body at the right readiness level for hard days. <br />
                    My groupmates and friends note that my analyzing skills and learnability are on a high level. I like this point, but I don`t trust them much :) <br />
                    Also I play on guitar (finished music school with the “red diploma”) and I`m a part of rock-group <a rel="noreferrer" href="https://vk.com/13minutdovihoda" target="_blank" >“13 minutes to exit”</a>.
                </p>
                <h3 className="main-subtitle">So basically I`m</h3>
                <div className="about__cards">
                    <div className="about-card">
                        <div className="about-card__img about-card__img-1">
                            <img src="/images/JunWebDev.svg" />
                        </div>
                        <p className="about-card__text">Junior WebDev</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card__img about-card__img-2">
                            <img src="/images/BioTech.svg" />
                        </div>
                        <p className="about-card__text">BioTech student</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card__img about-card__img-3">
                            <img src="/images/Sports.svg" />
                        </div>
                        <p className="about-card__text">Sports enjoyer</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card__img about-card__img-4">
                            <img src="/images/Guitar.svg" />
                        </div>
                        <p className="about-card__text">Guitarist</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about__container {
                    padding-top: 10rem;
                    padding-bottom: 2.8rem;
                }
                .about__title {
                    margin-bottom: 5.9rem;
                }
                .about__text {
                    font-size: 2rem;
                    padding-bottom: 10rem;
                }
                .about__text a {
                    color: #69A1E6;
                }
                .about__cards {
                    padding-top: 4.6rem;
                    width: 87rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                }
                .about-card {
                    width: 18rem;
                    height: 23rem;
                    padding: 2.6rem 0;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-between;
                    border-radius: 2rem;
                    box-shadow: -.1rem -.1rem .4rem rgba(0, 0, 0, 0.25), .4rem .4rem 2.2rem rgba(0, 0, 0, 0.25);
                }
                .about-card__img-1 {
                    height: 10rem;
                    width: 10rem;
                }
                .about-card__img-2 {
                    height: 13rem;
                    width: 10rem;
                }
                .about-card__img-3 {
                    height: 10rem;
                    width: 10rem;
                }
                .about-card__img-4 {
                    height: 12.4rem;
                    width: 6.5rem;
                }
                .about-card__img img {
                    width: inherit;
                    height: inherit;
                }
                .about-card__text {
                    font-size: 1.8rem;
                    font-weight: 600;
                }                
            `}</style>
        </div>
    );
}