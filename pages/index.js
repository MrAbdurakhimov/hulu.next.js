import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Hulu 2.0</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      {/* Results */}
    </div>
  );
}
