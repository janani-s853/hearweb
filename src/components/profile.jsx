import React, { useState } from 'react';
import './profile.css';
import { Camera } from 'lucide-react';
import userAvatar from './assets/user-avatar.jpeg'; // Adjust path if needed

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    lastname: '',
    gender: '',
    phone: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <h2>My Account</h2>
        <ul>
          <li className="profile-active">Profile</li>
          <li>My Appointments</li>
          <li>My Orders</li>
          <li className="profile-logout">Logout</li>
        </ul>
      </aside>

      <main className="profile-content">
        <div className="profile-header">
          <div className="profile-image-wrapper">
            <img src={userAvatar} alt="Profile" className="profile-avatar" />
            <label className="profile-upload-btn">
              <Camera size={20} />
              <input type="file" hidden />
            </label>
          </div>
          <h2>{profile.name || 'Your Name'}</h2>
        </div>

        <div className="profile-form">
          <div className="profile-form-row">
            <div className="profile-form-group">
              <label>First Name</label>
              <input name="name" value={profile.name} onChange={handleChange} disabled={!editing} />
            </div>
            <div className="profile-form-group">
              <label>Last Name</label>
              <input name="lastname" value={profile.lastname} onChange={handleChange} disabled={!editing} />
            </div>
          </div>

          <div className="profile-form-row">
            <div className="profile-form-group">
              <label>Gender</label>
              <select name="gender" value={profile.gender} onChange={handleChange} disabled={!editing}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="profile-form-group">
              <label>Phone</label>
              <input name="phone" value={profile.phone} onChange={handleChange} disabled={!editing} />
            </div>
          </div>

          <div className="profile-form-row">
            <div className="profile-form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" value={profile.dob} onChange={handleChange} disabled={!editing} />
            </div>
            <div className="profile-form-group">
              <label>Address</label>
              <textarea name="address" value={profile.address} onChange={handleChange} disabled={!editing} />
            </div>
          </div>

          <div className="profile-form-actions">
            {editing ? (
              <button onClick={() => setEditing(false)} className="profile-save-btn">Save</button>
            ) : (
              <button onClick={() => setEditing(true)} className="profile-edit-btn">Edit</button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
