import Link from 'next/link'
import asideToggle from './asideToggle'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="#firstScreen">
                <a className="navbar__link" onClick={asideToggle}>Home</a>
            </Link>
            <Link href="#aboutMain">
                <a className="navbar__link" onClick={asideToggle}>About</a>
            </Link>
            <Link href="#skillsMain">
                <a className="navbar__link" onClick={asideToggle}>Skills</a>
            </Link>
            <Link href="#portfolioMain">
                <a className="navbar__link" onClick={asideToggle}>Portfolio</a>
            </Link>
            <Link href="#contactsMain">
                <a className="navbar__link" onClick={asideToggle}>Contacts</a>
            </Link>

            <style jsx>{`
                .navbar {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .navbar__link {
                    text-decoration: none;
                    color: #000000;
                    font-size: 1.6rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    transition: all .3s;
                }

                .navbar__link:not(:last-child) {
                    margin-bottom: 1.4rem
                }

                @media (min-width: 48em) {
                    .navbar__link:hover {
                        color: #69A1E6;
                        text-shadow: 4px 4px 4px rgba(105, 161, 230, 0.25);
                        text-decoration: underline;
                    }
                }

                @media (max-width: 48em) {
                    .navbar__link {
                        font-size: 3.2rem;
                    }
                    .navbar__link:not(:last-child) {
                        margin-bottom: 2.4rem;
                    }
                }
            `}</style>
        </div>
    )
}