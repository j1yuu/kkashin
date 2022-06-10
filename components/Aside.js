import Profile from './aside/profile';
import Navbar from './aside/Navbar'

export default function Aside() {
    return (
        <aside className='aside'>
            <div className='aside__wrapper'>
                <Profile />
                <Navbar />
                <p className='aside__copyright'>&#169; 2022 All right are reserved</p>
            </div>

            <style jsx>{`
                .aside {
                    position: fixed;
                    width: 25%;
                    height: 100vh;
                    padding-top: 3.5rem;
                    padding-bottom: 2.5rem;
                    background: rgba(245, 255, 253, 0.71);
                    filter: drop-shadow(100px 0px 35px rgba(0, 0, 0, 0.25));
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
            `}</style>
        </aside>
    );
}