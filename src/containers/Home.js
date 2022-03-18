import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Home.scss';

export default function Home() {
  return (
    <>
      <Header/>
      <section className={styles.main}>
        메인 화면
      </section>
      <Footer/>
    </>
  )
};