import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

const UserProfile = () => {
  const [userProfileData, setUserProfileData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    imageOption: 'upload', // 'upload' or 'url'
    imageFile: null, // Store the selected image file
    imageUrl: '', // Store the image URL
    imagePreview: null, // Store the image preview URL
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserProfileData(formData);
    setShowModal(false);
  };

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageOptionChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      imageOption: value,
      imageUrl: '',
      imageFile: null,
      imagePreview: null,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageFile: imageFile,
        imagePreview: URL.createObjectURL(imageFile), // Generate a preview URL for the image
      }));
    }
  };

  return (
    <div className="container mt-4">
      {userProfileData ? (
        <div className="profile">
          <div className="left-side">
            <div className="profile-image-container">
              <img
                src={
                  formData.imageOption === 'upload'
                    ? formData.imagePreview
                    : formData.imageUrl
                }
                alt="User profile"
                className="profile-image"
              />
            </div>
          </div>
          <div className="right-side">
            <div className="profile-heading">
              <h2>User Profile</h2>
            </div>
            <div className="profile-info">
              <p>
                <strong>Name:</strong> {userProfileData.name}
              </p>
              <p>
                <strong>About:</strong> {userProfileData.about}
              </p>
            </div>
            <div className="profile-email">
              <p>
                <strong>Email:</strong> {userProfileData.email}
              </p>
            </div>
            <div className="profile-phone">
              <p>
                <strong>Phone:</strong> {userProfileData.phone}
              </p>
            </div>
            <button className="btn btn-primary" onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        showModal && (
          <div className="edit-profile-modal">
            <h2>Edit Profile</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="about">About</label>
                <textarea
                  id="about"
                  className="form-control"
                  name="about"
                  placeholder="Write something about yourself"
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group image-option-container">
                <label>Profile Image</label>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="imageOption"
                    value="upload"
                    checked={formData.imageOption === 'upload'}
                    onChange={handleImageOptionChange}
                  />
                  <label className="form-check-label">Upload Image</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="imageOption"
                    value="url"
                    checked={formData.imageOption === 'url'}
                    onChange={handleImageOptionChange}
                  />
                  <label className="form-check-label">Image URL</label>
                </div>
                {formData.imageOption === 'upload' && (
                  <div>
                    <input
                      type="file"
                      className="form-control-file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {formData.imagePreview && (
                      <div className="image-preview-container">
                        <img
                          src={formData.imagePreview}
                          alt="User profile"
                          className="image-preview"
                        />
                      </div>
                    )}
                  </div>
                )}
                {formData.imageOption === 'url' && (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      placeholder="Enter image URL"
                      value={formData.imageUrl}
                      onChange={handleChange}
                    />
                    {formData.imageUrl && (
                      <div className="image-preview-container">
                        <img
                          src={formData.imageUrl}
                          alt="User profile"
                          className="image-preview"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      )}
    </div>
  );
};

export default UserProfile;
