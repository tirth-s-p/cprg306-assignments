"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <main style={styles.main}>
        <h1 style={styles.heading}>CPRG 306: Web Development 2 - Assignments</h1>
        <div style={styles.linksContainer}>
            <p style={styles.link}>
                <a 
                    href="/week-2" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 2 Assignment
                </a>
                <br />
                <a 
                    href="/week-3" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 3 Assignment
                </a>
                <br />
                <a 
                    href="/week-4" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 4 Assignment
                </a>
                <br />
                <a 
                    href="/week-5" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 5 Assignment
                </a>
                <br />
                <a 
                    href="/week-6" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 6 Assignment
                </a>
                <br />
                <a 
                    href="/week-9" 
                    style={isHovered ? { ...styles.anchor, ...styles.anchorHovered } : styles.anchor}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Week 9 Assignment
                </a>
                
            </p>
        </div>
    </main>
    
    );
}

// Inline styles
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        height: '10vh',
        backgroundColor: '#000',
        color: '#fff',
        padding: '200px',
    },
    heading: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    link: {
        fontSize: '1.5em',
        margin: '10px 0',
    },
    anchor: {
        color: '#fff',
        textDecoration: 'none',
    },
    anchorHovered: {
        textDecoration: 'underline',
        color: 'green',
    }
};
