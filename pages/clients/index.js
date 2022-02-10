import React from 'react';
import Link from 'next/link';

const ClientsPage = () => {

    const clients = [
        { id: 'ali', name: 'Ali' },
        { id: 'imran', name: 'Imran' }
    ]

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href='/clients/ali'>Ali</Link>
                </li>

                <li>
                    <Link href='/clients/imran'>Imran</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientsPage