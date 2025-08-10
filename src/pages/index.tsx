import Head from "next/head";
import {Raleway} from "next/font/google";
import styles from "@/styles/Home.module.css";
import GeneralCard from '@/common/achievementCards/general';
import localFont from 'next/font/local';

const geistSans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const museo = localFont({
 src: [
  {
   path: '../../public/fonts/museo/Museo500.woff2',
   weight: '500',
   style: 'normal',
  },
  {
   path: '../../public/fonts/museo/Museo500.woff',
   weight: '500',
   style: 'normal',
  },
 ],
 variable: '--font-museo',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Achievement</title>
        <meta name="description" content="Achievement next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${museo.variable}`}
      >
        <main className={styles.main}>
         <GeneralCard />
        </main>
      </div>
    </>
  );
}
