import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Studenciak</title>
        <meta name='description' content='Studenciak App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Typography
        fontSize={36}
        fontWeight={500}
        sx={{ color: '#fff', textAlign: 'center', marginTop: '20vh' }}
      >
        &gt; Studenciak Deploy...
      </Typography>
    </>
  );
}
