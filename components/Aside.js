import Profile from './aside/Profile';
import Navbar from './aside/Navbar'

export default function Aside() {

    return (
        <aside className='aside' id="aside">
            <div className='aside__wrapper'>
                <Profile className="aside-profile" />
                <Navbar className="aside-navbar" />
                <p className='aside__copyright'>&#169; 2022 All right are reserved</p>
            </div>

            <style jsx>{`
                .aside {
                    position: fixed;
                    z-index: 10;
                    width: 25%;
                    height: 100vh;
                    padding-top: 3.5rem;
                    padding-bottom: 2.5rem;
                    background: rgba(245, 255, 253, 1);
                    box-shadow: 1.4rem 0 2.5rem rgba(105, 161, 230, 0.4);
                }
                .aside__wrapper {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                }
                .aside__copyright {
                    font-size: 1.4rem;
                }

                @media (max-width: 48em) {
                    .aside {
                        width: 100%;
                        display: none;
                    }

                    .aside-active {
                        display: block !important;
                        z-index: 50;
                    }

                    .aside__copyright {
                        font-size: 2.2rem;
                    }
                }
            `}</style>
        </aside>
    );
}