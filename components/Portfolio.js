import Link from "next/link";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion'

export default function Portfolio() {

    return (
        <div className="portfolio" id="portfolioMain">
            <div className="main-container portfolio__container">
                <h1 className="main-title portfolio__title"><b>Recent works</b></h1>
                <div className="portfolio__tabs">
                    <Accordion className="portfolio-accordion" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className="portfolio-accordion__upper">
                                    <div className="portfolio-accordion__left">
                                        <span className="portfolio-accordion__title">MaxProff |</span>
                                        <spanc className="portfolio-accordion__type">Landing page</spanc>
                                    </div>
                                    <span className="portfolio-accordion__stack">SASS/GULP/JQuey/Validator/PHPMailer</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.othlebnul.ru/MaxProff" rel="norefferer" tagret="blank" className="portfolio-accordion__img">
                                    <img src="/images/maxprof.jpg" loading="lazy" />
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className="portfolio-accordion__upper">
                                    <div className="portfolio-accordion__left">
                                        <span className="portfolio-accordion__title">Office Direct |</span>
                                        <spanc className="portfolio-accordion__type">Landing page</spanc>
                                    </div>
                                    <span className="portfolio-accordion__stack">SASS/GULP/JQuey/Validator/PHPMailer</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.othlebnul.ru/office-direct" rel="norefferer" tagret="blank" className="portfolio-accordion__img">
                                    <img src="/images/samurai.jpg" loading="lazy" />
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div className="portfolio-accordion__upper">
                                    <div className="portfolio-accordion__left">
                                        <span className="portfolio-accordion__title">Peterhof Parks |</span>
                                        <spanc className="portfolio-accordion__type">Info page</spanc>
                                    </div>
                                    <span className="portfolio-accordion__stack">JQuey/GoogleAPI/Web-design</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.othlebnul.ru/peterhof-park" rel="norefferer" tagret="blank" className="portfolio-accordion__img">
                                    <img src="/images/peterhof.jpg" loading="lazy" />
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <div className="portfolio-accordion__upper">
                                    <div className="portfolio-accordion__left">
                                        <span className="portfolio-accordion__title">This website |</span>
                                        <spanc className="portfolio-accordion__type">Portfolio/about page</spanc>
                                    </div>
                                    <span className="portfolio-accordion__stack">React.JS/Next.JS</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="#firstScreen" rel="norefferer" tagret="blank" className="portfolio-accordion__img">
                                    <img src="/images/kkashin.jpg" loading="lazy" />
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>

            <style jsx>{`
                .portfolio__container {
                    padding-top: 3rem;
                }
                .portfolio__title {
                    padding-bottom: 10rem;
                }
                .portfolio__tabs {
                    width: 88rem;
                    margin: 0 auto;
                }
                .portfolio-accordion__upper {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .portfolio-accordion__title {
                    font-weight: 500;
                    font-family: 'Montserrat';
                    font-size: 1.8rem;
                    color: #000000;
                }
                .portfolio-accordion__type {
                    font-weight: 500;
                    font-size: 1.8rem;
                    margin-left: 1.4rem;
                    color: #000000;
                }
                .portfolio-accordion__stack {
                    color: #7E7E7E;
                    font-weight: normal;
                    font-family: 'Montserrat';
                    font-size: 1.8rem;
                }
                .portfolio-accordion__img {
                    width: 100%;
                    height: 39.7rem;
                }
                .portfolio-accordion__img img {
                    height: inherit;
                    width: inherit;
                }

                @media (max-width: 48em) {
                    .portfolio__tabs {
                        width: 67.8rem;
                    }
                    .portfolio-accordion__title {
                        font-size: 2.8rem;
                    }
                    .portfolio-accordion__type {
                        font-size: 2.6rem;
                    }
                    .portfolio-accordion__stack {
                        display: none;
                    }
                }
            `}</style>

        </div>
    )
}