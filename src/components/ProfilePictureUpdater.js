// ProfilePictureChanger.js

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
const ProfilePictureChanger = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
console.log(userId);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  // const { getAccessTokenSilently } = useAuth0();
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Use Auth0 Management API to update the user's profile picture
        const response = await axios.patch(
          `https:/dev-obx555c1z6rfkbof.us.auth0.com/api/v2/users/${userId}`,
          { picture: '' }, // Auth0 requires a non-empty value for the picture field
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9YV3B5UWhZd3liVTZEbDQ0MXNGZiJ9.eyJpc3MiOiJodHRwczovL2Rldi1vYng1NTVjMXo2cmZrYm9mLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJRMlhuUFZMUWtoYVd4M3NndGdEY1J5dTFCeG8wd1MyT0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuY2luZXF1ZXN0LmNvbSIsImlhdCI6MTcwMzkyNzA3MywiZXhwIjoxNzA0MDEzNDczLCJhenAiOiJRMlhuUFZMUWtoYVd4M3NndGdEY1J5dTFCeG8wd1MyTyIsInNjb3BlIjoicmVhZDpjdXJyZW50X3VzZXIgdXBkYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.F4o68z35qRXkU0T5Kb7dcZBCh-oYGPvoO6HuEyUtK-Yuh1KYgtBY7KqD6_rtyjucj32SSN0VyOSCecz_WPni5D9OyxNajC_NaJhWE1UHSFYcwX1QpLPK0ZkAWft9FCTv0NozeFtvi8IoNXRxUbonbkLMopn_zR8ub98icJD71oE-eP2c5VI1bfj2xnn8Z9op9I4DM3xpcFZncqlsZhKOb4X-rwt9jnLwdRZK0OooZG5uAOKsbj7BjvFMlFetNWU8oFWZqNNKyqzc7X1rFrmmwHkdbEDePt4iTuwY06RrtEhroS7tCQYtPt0Sos_NxFHBgZeE9iwZN90rCJ-gm1GsTQ`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Do something with the response (e.g., update local state)
        console.log('Profile picture updated:', response.data);

        // Clear the selected file
        setSelectedFile(null);
      } catch (error) {
        console.error('Error updating profile picture:', error);
      }
    }
  };

  return (
    <div>
      <h3>Change Profile Picture</h3>
      <input type="file" onChange={handleFileChange} />
      {/* <button onClick={handleUpload}>Upload Picture</button>
      {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" />} */}
    </div>
  );
};

export default ProfilePictureChanger;
