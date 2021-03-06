import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile({ users }){
    return (
        <div>
            <Head>
                <title>Profile Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            </Head>
            <Header />
            <div>
                <h1>This is Profile page</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(
                            (user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Profile

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        }
    }
}