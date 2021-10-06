import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Root from './root'

export default function App() {
  return (
    <>
      <Head>
        <title>Resume, Hanheesong (작업중)</title>
        <meta name="description" content="Resume, Hanheesong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Root />
    </>
  )
}
