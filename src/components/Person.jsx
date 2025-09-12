import React from 'react';

function UserProfile() {
  const user = {
    name: 'Jone Don ',
    age: 23,
    location: 'Ahmadabad',
    email: 'example@.com',
    phone: '+91-9876543210',
    bio: 'I am a frontend developer who loves building user interfaces using React and JavaScript.',
    image: 'https://media.istockphoto.com/id/1318160000/photo/photo-of-lady-with-white-background.jpg?s=612x612&w=0&k=20&c=n1Hm0oMv_ExUoynuUXcirU0enEelj-3mhWBh-gXiaxQ=',
    social: {
      website: '#',
      gmail: '#',
      linkedin: '#',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={user.image} alt="Profile" style={styles.profileImage} />
      </div>
      <div style={styles.info}>
        <h2 style={styles.name}>{user.name}</h2>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p style={styles.bio}>{user.bio}</p>
        <div style={styles.social}>
          <a href={user.social.website}>🌐 Website</a>
          <a href={user.social.gmail}>📧 Gmail</a>
          <a href={user.social.linkedin}>💼 LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    gap: '30px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    maxWidth: '800px',
    margin: '100px auto',
    alignItems: 'center',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  imageContainer: {
    flexShrink: 0
  },
  profileImage: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '4px solid #00bcd4',
    objectFit: 'cover'
  },
  info: {
    flexGrow: 1,
    color: '#333'
  },
  name: {
    marginBottom: '10px'
  },
  bio: {
    marginTop: '15px',
    fontStyle: 'italic',
    color: '#00796b'
  },
  social: {
    marginTop: '20px',
    display: 'flex',
    gap: '15px'
  }
};

export default UserProfile;
