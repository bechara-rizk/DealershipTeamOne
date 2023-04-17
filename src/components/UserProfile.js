import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Avatar = ({ onClick }) => {
  return (
    <div className="avatar" onClick={onClick}>
      <img src="/images/profile.jpg" alt="Profile Picture" />
    </div>
  );
};

const UserInfoPage = ({ onClose }) => {
  const [userInfo, setUserInfo] = useState({
    name: 'Username',
    email: 'user@example.com',
    phone: '+961 55 555 555',
    address: 'Lebanon, Mount Lebanon'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleUserInfoChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // TODO: Implement save changes logic
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="user-info-page">
      <div className="user-info">
      
        <div className="info-paper">
          <div className="avatar">{userInfo.name[0]}</div>
          
          <div className="username">
            <h3 className="name">{userInfo.name}</h3>
          
            {!isEditing && (
              <button className="edit-button" onClick={handleEditClick}>
                <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#000000' }} />
              </button>
            )}
             
          </div>

         

          {isEditing ? (

            <>
           
            <div className='inputs'>
            <label htmlFor="username" className='Uname'>Name</label>
              <input  type="text" value={userInfo.name} onChange={(e) => handleUserInfoChange('name', e.target.value)} />
            </div>              
            
            <div className='inputs'>
            <label htmlFor="email" className='Umail'>Email</label>
            <input id="email" type="email" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />
            </div>  

            <div className='inputs'>
              <label htmlFor="phone" className='Uphone'>Phone</label>
              <input id="phone" type="tel" value={userInfo.phone} onChange={(e) => handleUserInfoChange('phone', e.target.value)} />
            </div>

            <div className='inputs'>

              <label htmlFor="address" className='Uaddress'>Address</label>
              <textarea id="address" value={userInfo.address} onChange={(e) => handleUserInfoChange('address', e.target.value)} />
            </div>
              <button className="save-button" onClick={onClose}>Save changes</button>
            </>
          ) : (
            <>
              <p>Email: {userInfo.email}</p>
              <p>Phone: {userInfo.phone}</p>
              <p>Address: {userInfo.address}</p>
              <button className="save-button" onClick={onClose}>Close</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const [isInfoPageOpen, setIsInfoPageOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsInfoPageOpen(true);
  };

  const handleInfoPageClose = () => {
    setIsInfoPageOpen(false);
  };

  return (
    <div className="user-profile">
      
      <Avatar onClick={handleAvatarClick} />
      {isInfoPageOpen && <UserInfoPage onClose={handleInfoPageClose} />}
    </div>
  );
};

export default UserProfile;
