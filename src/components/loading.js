import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
`;

const containerStyle = {
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const textStyle = {
  color: 'white',
  fontSize: '3em',
  fontFamily: 'Calibri light', 
  marginBottom: '20px'
};

function LoadingPage() {
  return (
    <div style={containerStyle}>
      <div style={textStyle}>LuxeMotors</div>
      <ClipLoader color={'#FF0000'} loading={true} css={override} size={150} />
    </div>
  );
}

export default LoadingPage;
