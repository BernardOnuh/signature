import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style'
import {Navbar, Hero, MyNFT, SigMint} from '../components/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mint My NFTs</title>
        <meta name="description" content="Deploy and Minting of my NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <MyNFT />
            <SigMint/>
            {/*<Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />*/}
          </div>
        </div>
      </div>
    </>
  )
}
