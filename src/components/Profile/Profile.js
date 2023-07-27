// import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './profile.css';

const UserProfile = () => {

  const { user, isAuthenticated } = useAuth0();

  // const [userProfileData, setUserProfileData] = useState(null);
  // const [showModal, setShowModal] = useState(true);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   about: '',
  //   imageOption: 'upload', // 'upload' or 'url'
  //   imageFile: null, // Store the selected image file
  //   imageUrl: '', // Store the image URL
  //   imagePreview: null, // Store the image preview URL
  // });

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setUserProfileData(formData);
  //   setShowModal(false);
  // };

  // const handleEditProfile = () => {
  //   setShowModal(true);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleImageOptionChange = (e) => {
  //   const { value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     imageOption: value,
  //     imageUrl: '',
  //     imageFile: null,
  //     imagePreview: null,
  //   }));
  // };

  // const handleImageChange = (e) => {
  //   const imageFile = e.target.files[0];
  //   if (imageFile) {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       imageFile: imageFile,
  //       imagePreview: URL.createObjectURL(imageFile), // Generate a preview URL for the image
  //     }));
  //   }
  // };
  return (
    <div className="container mt-4">


      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12" style={{width :"80%" }}>
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img  src={ user?.picture && user.picture}
                          alt="User profile"
                          class="img-radius"/>
                      </div>
                      <h6 class="f-w-600">{user?.name}</h6>
                      <p>Full Stack ...</p>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{user?.email || `${user?.nickname}@gmail.com`}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">{user?.phone_number || `07XXXXXXXX`}</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Recent</p>
                          <h6 class="text-muted f-w-400">JobScouts</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Most Viewed</p>
                          <h6 class="text-muted f-w-400">Mohamad Samara</h6>
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="profile">
          <div className="left-side">
            <div className="profile-image-container">
              <img
                src={ user?.picture && user.picture}
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
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Local:</strong> {user?.locale || `AR`}
              </p>
            </div>
            <div className="profile-email">
              <p>
                <strong>Email:</strong> {user?.email || `${user?.nickname}@gmail.com`}
              </p>
            </div>
            <div className="profile-phone">
              <p>
                <strong>Phone:</strong> {user?.phone_number || `07XXXXXXXX`}
              </p>
            </div>
          </div>
        </div> */}


    </div>
  );
};

export default UserProfile;
