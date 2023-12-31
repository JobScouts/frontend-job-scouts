import { useAuth0 } from '@auth0/auth0-react';
import './profile.css';

const UserProfile = () => {

  const { user } = useAuth0();

  return (
    <div style={{backgroundColor:'rgba(69,90,100,0.044)', padding:"1px"}}>
    <div className="container mt-4" >
      <div class="page-content page-container" id="page-content" style={{width:"100%"}}>
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12" style={{ width: "80%" }}>
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img src={user?.picture && user.picture}
                          alt="User profile"
                          class="img-radius" />
                      </div>
                      <h6 class="f-w-600">{user?.name}</h6>
                      <p style={{color:"white"}}>Full Stack ...</p>
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li><a href="www.facebook.com" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li><a href="www.twitter.com" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li><a href="www.instagram.com" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;