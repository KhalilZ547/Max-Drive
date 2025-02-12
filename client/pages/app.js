import '../styles/Clock.css'; // Import global CSS
import React, { StrictMode, useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (hasError) {
      console.error(errorMessage); // Log the error message
    }
  }, [hasError, errorMessage]);

  return (
    <StrictMode>
      {hasError ? (
        <div>
          <h1>Error</h1>
          <p>{errorMessage}</p>
        </div>
      ) : (
        children
      )}
    </StrictMode>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
