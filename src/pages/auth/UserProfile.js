import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../../firebase";

const Avatar = ({ onClick }) => {
  return (
    <div className="avatar" onClick={onClick}>
      <img src="/images/profile.jpg" alt="Profile Picture" />
    </div>
  );
};



const UserInfoPage = ({ onClose }) => {

  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',});

const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        setUserData(userDoc.data());
        setUserInfo(userDoc.data());
      } else {
        console.log("No such user document!");
      }
    };

    if (auth.currentUser) {
      fetchData();
    }
  }, [auth.currentUser]);

  
  const handleUserInfoChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSaveChanges = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", auth.currentUser.uid);
    await setDoc(userDocRef, userInfo, { merge: true });
    setUserData(userInfo);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="user-info-page">
      <div className="user-info">
        <div className="info-paper">
          <div className="avatar">{userData && userData.firstName[0]}</div>
          <div className="username">
            <h3 className="name">{userData && userData.firstName} {userData && userData.lastName}</h3>
            {!isEditing && (
              <button className="edit-button" onClick={handleEditClick}>
                <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#000000' }} />
              </button>
            )}
          </div>
          {isEditing ? (
            <>
              <div className='inputs'>
                <label htmlFor="firstName" className='Uname'>Name</label>
                <input id="firstName" type="text" value={userInfo.firstName} onChange={(e) => handleUserInfoChange('firstName', e.target.value)} />
              </div>              
              <div className='inputs'>
                <label htmlFor="lastName" className='Uname'>Family</label>
                <input id="lastName" type="text" value={userInfo.lastName} onChange={(e) => handleUserInfoChange('lastName', e.target.value)} />
              </div>
              <div className='inputs'>
                <label htmlFor="email" className='Umail'>Email</label>
                <input id="email" type="email" value={userInfo.email} onChange={(e) => handleUserInfoChange('email', e.target.value)} />
              </div>
              <div className='inputs'>
                <label htmlFor="number" className='Uphone'>Phone</label>
                <input id="number" type="tel" value={userInfo.number} onChange={(e) => handleUserInfoChange('number', e.target.value)} />
              </div>
              <button className="save-button" onClick={handleSaveChanges}>Save changes</button>
            </>
          ) : (
            <>
              <p>Email: {userData && userData.email}</p>
              <p>Phone: {userData && userData.number}</p>
              <p>First Name: {userData && userData.firstName}</p>
              <p>Last Name: {userData && userData.lastName}</p>
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