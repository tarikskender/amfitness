import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // Add client-side code here
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Webpage description goes here" />
        <title>AM Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="" />
      </Head>

      <div className={styles.main}>
        <Image src="/logo.png" width={450} height={150} alt="Logo" />
        <h1>COMING SOON</h1>
        <hr className={styles.hr} />
        <h3 className={styles.h3titles}>23.03.2023</h3>
        <h3 className={(styles.h3titles, styles.emailTitle)}>
          am_fitness0@yahoo.com
        </h3>
      </div>
    </>
  );
}
