import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Button, EditIcon} from '@/components/mui'
import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component='h2'>Home Page</Heading>
        <Paragraph>This is where a paragraph will go in order to test that it is working properly</Paragraph>
        <Button variant="contained">
          <EditIcon/>
          Button
          </Button>
      </Layout>
    </>
  )
}
