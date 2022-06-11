import Head from 'next/head';
import Aside from '../components/Aside';
import MainContent from '../components/MainContent'

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
      <Aside />
      <MainContent />

      <style jsx>{`
      .page {
        position: relative;
      }
    `}</style>
    </div>
  )
}
