export default function Contacts() {
    return (
        <div id="contactsMain" className="contacts">
            <div className="main-container contacts__container">
                <h1 className="main-title contacts__title"><b>Contacts</b></h1>
                <p className="contacts__paragraph">So, I guess that this is the end of my page. <br />
                    If you want to get in touch with me - I`m always online.</p>
                <div className="contacts__contacts">
                    <a className="contacts__phone" href="tel:+79811417306">+7 (981) 141-73-06</a>
                    <a className="contacts__social" href="https://t.me/othlebnul">
                        <div className="contacts__img">
                            <img loading="lazy" src="/images/tg.svg" />
                        </div>
                        <span>@othlebnul</span>
                    </a>
                    <a className="contacts__social" href="https://vk.com/othlebnul">
                        <div className="contacts__img">
                            <img loading="lazy" src="/images/vk.svg" />
                        </div>
                        <span>https://vk.com/othlebnul</span>
                    </a>
                </div>
            </div>

            <style jsx>{`
            .contacts__container {
                padding-top: 10rem;
                padding-bottom: 2rem;
            }
            .contacts__title {
                padding-bottom: 5.9rem;
            }
            .contacts__paragraph {
                font-weight: 500;
                font-size: 2.2rem;
            }
            .contacts__contacts {
                margin-top: 6rem;
                padding: 2rem 0rem 0 6rem;
                width: 50%;
                border-radius: 2rem 0 2rem 0;
                box-shadow: .4rem .4rem 2.5rem rgba(0, 0, 0, 0.25);
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .contacts__phone {
                text-decoration: none;
                color: #000000;
                font-weight: 700;
                font-size: 2.2rem;
                padding-bottom: 2rem;
            }    
            .contacts__social {
                display: flex;
                align-items: center;
                text-decoration: none;
                margin-bottom: 2rem;
            }
            .contacts__social span {
                font-size: 2.2rem;
                color: #000000;
                margin-left: 1.4rem;
            }
            .contacts__img {
               height: 2.4rem;
               width: 2.4rem 
            }  
            .contacts__img img{
                height: inherit;
                width: inherit;
            }       
            @media (max-width: 48em) {
                .contacts__paragraph {
                    font-size: 3rem;
                }
                .contacts__contacts {
                    width: 100%;
                    box-shadow: none;
                    margin-bottom: 6rem;
                }
                .contacts__phone {
                    font-size: 3.2rem;
                    padding-bottom: 3rem;
                }    
                .contacts__social {
                    margin-bottom: 3rem;
                }
                .contacts__social span {
                    font-size: 3.2rem;
                    margin-left: 4.4rem;
                }
                .contacts__img {
                   height: 4.4rem;
                   width: 4.4rem 
                }  
            } 
            `}</style>
        </div>
    )
}