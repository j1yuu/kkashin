import Head from 'next/head';
import Aside from '../components/Aside';
import MainContent from '../components/MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import asideToggle from '../components/aside/asideToggle';


export default function Home() {

  return (
    <div className='page'>
      <Head>
        <title>Kkashin - webdev</title>
        <meta
          name="description"
          content="Kkashin`s personal website"
        />
      </Head>

      <button className="aside-toggle" onClick={asideToggle}>
        <img src="/images/burger.svg" className='toggle-image toggle-image-active' />
        <img src="/images/cross.svg" className='toggle-image' />
      </button>

      <Aside />
      <MainContent />

      <style jsx>{`
      .page {
        position: relative;
        overflow: hidden;
      }
    `}</style>
    </div>
  )
}
