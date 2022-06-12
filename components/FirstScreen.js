import Image from 'next/image'

export default function FirstScreen() {
    return (
        <div className="firstscreen" id="firstScreen">
            <div className='firstscreen__image'>
                <Image
                    priority
                    src="/images/mainpic.jpg"
                    layout="responsive"
                    height={1084}
                    width={1080}
                    alt="Kkashin"
                />
            </div>

            <div className='firstscreen__text'>
                <p className='firstscreen__uppertext'>I am <br />
                    a Developer</p>
                <p className='firstscreen__lowertext'>Junior Frontend <br />
                    Working with React / Bootstrap / SASS / JQuery</p>
            </div>

            <div className='firstscreen__city'>
                <span>Saint-Petersburg, Peterhof</span>
            </div>

            <style jsx>{`
                .firstscreen {
                    width: 100%;
                    height: 108.6rem;
                    position: relative;
                }

                .firstscreen__image {
                    width: inherit;
                    height: inherit;
                    position: absolute;
                }

                .firstscreen__text {
                    position: absolute;
                    top: 35rem;
                    left: 15.6rem;
                }

                .firstscreen__uppertext {
                    font-family: 'Montserrat';
                    font-weight:700;
                    font-size: 6.4rem;
                    color: #FFFFFF;
                    margin-bottom: 3rem;
                }

                .firstscreen__lowertext {
                    font-weight: 500;
                    font-size: 2.4rem;
                    color: #FFFFFF;
                }

                .firstscreen__city {
                    position: absolute;
                    bottom: 4rem;
                    width: 100%;
                    text-align: center;
                }

                .firstscreen__city span {
                    color: #FFFFFF;
                    font-size: 1.8rem;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    )
}