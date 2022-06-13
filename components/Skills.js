export default function Skills() {
    return (
        <div className="skills" id="skillsMain">
            <div className="main-container skills__container">
                <h2 className="main-subtitle skills__subtitle">Skills and professional education</h2>
                <p className="main-paragraph skills__paragraph">
                    To learn Frontend-developement I`ve enrolled course “Web-Developing” by GloAcademy. It was 9 hard weeks, but I really enjoyed this course, because I`m really interested in this profession. <br />
                    At this course I`ve learned HTML5, CSS3, GULP, SASS/SCSS, JQuery, PHPMailer, semantic layout, adaptive layout, page speed optimization. After compleating this course I`ve started to learn the React.JS by YouTube lessons until I`ve found <a href="https://www.scrimba.com" target="_blank" rel="noreferrer">Scrimba.com</a>, where I`m finished free course about React. Then I`ve started learning Next.JS framework for React, and now I`m here!
                </p>
                <h1 className="main-title skills__title">My skills</h1>
                <div className="skills__cards">
                    <div className="skills-card">
                        <div className="skills-card__left">
                            <div className="skills-card__img">
                                <img loading="lazy" src="images/React.svg" />
                            </div>
                            <p className="skills-card__description">React.JS</p>
                        </div>
                        <p className="skills-card__right">Learned about states, props. <br />
                            Learning Next.JS<br />
                            Learning from May, 3rd.</p>
                    </div>
                    <div className="skills-card">
                        <div className="skills-card__left">
                            <div className="skills-card__img">
                                <img loading="lazy" src="images/Gulp.svg" />
                            </div>
                            <p className="skills-card__description">Gulp</p>
                        </div>
                        <p className="skills-card__right">Learned how to use, how to change dependencies, to use libs.</p>
                    </div>
                    <div className="skills-card">
                        <div className="skills-card__left">
                            <div className="skills-card__img">
                                <img loading="lazy" src="images/JQuery.svg" />
                            </div>
                            <p className="skills-card__description">JQuery</p>
                        </div>
                        <p className="skills-card__right">Learned basic synthax, DOM interactions, cycles, and other native JS thing used in JQuery.</p>
                    </div>
                    <div className="skills-card">
                        <div className="skills-card__left">
                            <div className="skills-card__img">
                                <img loading="lazy" src="images/SASS.svg" />
                            </div>
                            <p className="skills-card__description">SASS/SCSS</p>
                        </div>
                        <p className="skills-card__right">Learned all the benefits above native CSS: mixins, variables, nestings, imports.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .skills__container {
                    padding-top: 15rem;
                }
                .skills__subtitle {
                    padding-bottom: 5.9rem;
                }
                .skills__paragraph {
                    padding-bottom: 10rem;
                }
                .skills__paragraph a {
                    color: #69A1E6;
                    text-decoration: none;
                }
                .skills__title {
                    padding-bottom: 10rem;
                }
                .skills__cards {
                    width: 89rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .skills-card {
                    width: 41rem;
                    height: 23.3rem;
                    margin-bottom: 7rem;
                    display: flex;
                    justify-content: space-between;
                    padding: 2.2rem 2.6rem 3.5rem 2.3rem;
                    box-shadow: .4rem .4rem 2.5rem rgba(0, 0, 0, 0.25);
                    border-radius: 2rem;
                }
                .skills-card__left {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                }
                .skills-card__img {
                    width: 11.2rem;
                    height: 12.4rem;
                }
                .skills-card__img img {
                    width: inherit;
                    height: inherit;
                }
                .skills-card__description {
                    font-size: 1.8rem;
                    font-family: 'Montserrat';
                }
                .skills-card__right {
                    width: 22rem;
                    padding-top: 3.5rem;
                    font-family: 'Montserrat';
                    font-size: 1.8rem;
                    font-weight: 500;
                }
            `}</style>
        </div>
    )
}