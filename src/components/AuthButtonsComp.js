import { auth } from '../../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import UserProfile from '../pages/auth/UserProfile';

const AuthButtons = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo' />
        <div className="authContainer">
          <div className="dropdown" style={{ 'z-index': '-99' }}>
            <button className="dropbtn">Login <i className="arrowLogin down"></i>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/auth/Login">Login</a>
              <a href="/auth/Register">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='authButtons'>
      <img src='/images/logo.jpg' alt='logo' className='homepageLogo' />
      <div className='authwrapper'>
        <div className="authContainer">
          <div className="dropdown">
            <button className="dropbtn">
              {!user ? "Login" : "Sign Out"} <i className="arrowLogin down"></i>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              {!user ? (
                <>
                  <a href="/auth/Login">Login</a>
                  <a href="/auth/Register">Sign Up</a>
                </>
              ) : (
                <>
                  {user.uid === "1TaE0cpIawWbsbKcJ2cij6uUpmi2" ? <a href="/dashboard/home">Admin</a> : null}
                  <a href="" onClick={() => auth.signOut()}>Sign out</a>
                </>
              )}
            </div>
          </div>
          {user && (
            <div className='user-profile'>
              <UserProfile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
          }  

export default AuthButtons;
