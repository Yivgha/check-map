import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [49.8418056903349, 24.031734415341187];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta
          name='description'
          content='Create mapping apps with Next.js Leaflet Starter'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section>
        <Container>
          <Map
            className={styles.homeMap}
            width='800'
            height='400'
            center={DEFAULT_CENTER}
            zoom={18}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    This is a marker. <br /> Can you see Lviv?
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          <p className={styles.description}>
            To create basic map container use:
          </p>
          <code className={styles.code}>
            npx create-next-app -e
            https://github.com/colbyfayock/next-leaflet-starter
          </code>

          <p className={styles.view}>
            <Button href='https://github.com/colbyfayock/next-leaflet-starter'>
              Vew on GitHub
            </Button>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
