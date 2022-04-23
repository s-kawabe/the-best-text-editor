import Head from 'next/head'

import { RichTextEditor } from '@/components/ui/editor/RichTextEditor'

import styles from './Top.module.scss'

export const Top = () => {
  return (
    <>
      <Head>
        <title>lexcal prayground</title>
        <meta name="description" content="facebook text editor library 'lexical'" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.header}>Lexical Prayground</h1>
        <RichTextEditor />
      </main>
    </>
  )
}
