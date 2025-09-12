import React from 'react';
import { NavLink } from 'react-router-dom';

const NoDataFound = () => {
    return (
        <div style={styles.container}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" // ✅ Working no-data image
                alt="No Data Found"
                style={styles.image}
            />
            <h2 style={styles.heading}>No Data Found</h2>
            <p style={styles.text}>We couldn’t find any items to display.</p>
            <NavLink to="/" style={styles.button}>Go Back Home</NavLink>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px 20px',
        fontFamily: 'sans-serif',
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '300px',
        marginBottom: '20px',
    },
    heading: {
        fontSize: '2rem',
        color: '#555',
    },
    text: {
        fontSize: '1.1rem',
        color: '#888',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#6c63ff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
};

export default NoDataFound;
