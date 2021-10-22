import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';

function About(){
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            </Head>
            <Header />
            <div>
                <h1>This is About page</h1>
                
            </div>
            <Footer />
        </div>
    )
}

export default About