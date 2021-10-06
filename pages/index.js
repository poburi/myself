import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import common from '../styles/common.module.css';
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/react'
import ProfileComponent from '../components/Profile'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


export default function Home() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Head>
          <title>Resume, Hanheesong (작업중)</title>
          <meta name="description" content="Resume, Hanheesong" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.app}>
          <ProfileComponent />
        </div>
      </div>
    </ParallaxProvider>
  )
}
