import Image from 'next/image'

export default function Profile() {
    return (
        <div className='profile'>
            <div className='profile__pic'>
                <Image
                    priority
                    src="/images/profpic.png"
                    layout="responsive"
                    height={180}
                    width={180}
                    alt="Kkashin"
                />
            </div>

            <h2 className='profile__name'>Konstantin Kashin</h2>

            <p className='profile__about'>
                <span>Frontend-developer</span>
                <span>From St.-Petersburg</span>
            </p>

            <style jsx>{`
                .profile {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }

                .profile__pic {
                    width: 18rem;
                    height: 18rem;
                }

                .profile__name {
                    font-family: 'Montserrat';
                    font-size: 2.6rem;
                    font-weight: 700;
                    margin-top: 3.7rem;
                    margin-bottom: 1.4rem;
                    text-shadow: .2rem .2rem .9rem rgba(0, 0, 0, 0.15);
                }

                .profile__about {
                    width: 23.1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .profile__about span {
                    font-size: 1.8rem;
                    font-family: 'Montserrat';
                    text-transform: uppercase;
                }

                .profile__about span:first-child {
                    color: #69A1E6;
                }
            `}</style>
        </div>
    )
}