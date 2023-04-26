import React, { useState } from 'react';


const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Username',
    email: 'user@example.com',
    phone: '+961 55 555 555',
    address: 'Lebanon, Mount Lebanon'
  });

  const handleUserInfoChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // TODO: Implement save changes logic
  };

  return (
    <div className="user-info-page">
      <div className="user-info">
      <div className="avatar">{userInfo.name[0]}</div>
      <h4 className="name">{userInfo.name}</h4>
      <div className="info-paper">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" value={userInfo.phone} onChange={(e) => handleUserInfoChange('phone', e.target.value)} />

        <label htmlFor="address">Address</label>
        <textarea id="address" value={userInfo.address} onChange={(e) => handleUserInfoChange('address', e.target.value)} />

        <button className="save-button" onClick={handleSaveChanges}>Save changes</button>
      </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
