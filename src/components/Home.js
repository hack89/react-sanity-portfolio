import React from 'react'

function Home() {
    return (
        <main>
            <img
                className="absolute object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1587826659233-4620a9f18e91?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">Helloo</h1>
            </section>
        </main>
    )
}

export default Home
