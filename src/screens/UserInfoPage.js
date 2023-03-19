import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './UserInfoPage.css';
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
    <div className="user-info">
      <Avatar className="avatar">{userInfo.name[0]}</Avatar>
      <Typography variant="h4" gutterBottom className="name">
        {userInfo.name}
      </Typography>
      <Paper className="info-paper">
        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />
        <TextField id="phone" label="Phone" variant="outlined" fullWidth margin="normal" value={userInfo.phone} onChange={(e) => handleUserInfoChange('phone', e.target.value)} />
  
        <TextField id="address" label="Address" variant="outlined" fullWidth multiline rows={4} margin="normal" value={userInfo.address} onChange={(e) => handleUserInfoChange('address', e.target.value)} />
        <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleSaveChanges}>Save changes</Button>
      </Paper>
      
    </div>
  );
};

export default UserInfoPage;
