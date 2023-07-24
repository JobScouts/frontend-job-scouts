import React from "react";
import "./profile.css";
import { useState, useEffect } from 'react';


const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    about: '',
  });

  useEffect(() => {
    // Fetch user profile data from the backend (replace with your API call)
    fetchUserProfileData()
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.error('Error fetching user profile data:', error);
      });
  }, []);

  const fetchUserProfileData = async () => {
    // Replace this with your backend API call to get user profile data
    // For simplicity, I'm returning dummy data here
    return {
      name: 'Aws Alomari',
      email: 'aws@example.com',
      phoneNumber: '0792908328',
      about: '',
    };
  };

  const handleAboutChange = (event) => {
    setUserProfile({
      ...userProfile,
      about: event.target.value,
    });
  };

  const handleUpdateAbout = () => {
    // Send the updated 'about' section to the backend (replace with your API call)
    updateAboutSection(userProfile.about)
      .then(() => {
        alert('About section updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating about section:', error);
      });
  };

  const updateAboutSection = async (aboutText) => {
    // Replace this with your backend API call to update the 'about' section
    // For simplicity, I'm just logging the updated 'about' text here
    console.log('Updated about section:', aboutText);
  };

  return (
    <section className="user-profile-container">
      <div className="user-details">
        <img
          className="user-profile-picture"
          src="path/to/user-profile-picture.jpg"
          alt="User Profile"
        />
        <h2>{userProfile.name}</h2>
        <p>Email: {userProfile.email}</p>
        <p>Phone: {userProfile.phoneNumber}</p>
      </div>
      <div className="user-about">
        <textarea
          className="about-textarea"
          value={userProfile.about}
          onChange={handleAboutChange}
          placeholder="Write something about yourself..."
        />
        <button className="update-button" onClick={handleUpdateAbout}>
          Update About
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
