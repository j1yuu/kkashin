import Head from 'next/head';
import Aside from '../components/Aside';

export default function Home() {
  return (
    <div className='page'>
      <Head>
        <title>Kkashin - webdev</title>
        <meta
          name="description"
          content="Kkashin`s personal website"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Aside />
      <style jsx>{`
      .page {
        position: relative;
        height: 200vh;
      }
    `}</style>
    </div>
  )
}
