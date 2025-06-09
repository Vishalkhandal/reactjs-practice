import React from 'react'

function Navbar() {
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightcyan' }}>
                <div>
                    <h2>Shree Catering</h2>
                </div>
                <ul style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'center', listStyle: 'none' }}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar