import React from 'react';

const LoadingPage = () => (
  <div
    style={{
      minHeight: '93.4vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#FFC0CB',
      alignItems: 'center',
      color: 'black',
      fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    }}
  > 
    <h5 style={{ flex: '1'}}>
      Loading...
    </h5>
  </div>
);

export default LoadingPage;