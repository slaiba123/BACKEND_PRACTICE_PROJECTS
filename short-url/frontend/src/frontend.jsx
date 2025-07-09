import React, { useState } from 'react';
import { shortenUrl } from './services/api';

export default function UrlShortener() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setShort('');

    try {
      const res = await shortenUrl(url);
      setShort(res.data.shortUrl);
    } catch (err) {
      setError('⚠️ Failed to shorten URL. Please check your backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>🔗 Simple URL Shortener</h2>
      <input
        type="text"
        placeholder="Paste your long URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleSubmit}
        style={{
          ...styles.button,
          ...(loading && styles.disabledButton),
        }}
        disabled={loading}
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {short && (
        <p style={styles.result}>
          Short URL:{' '}
          <a
            href={`http://localhost:3000/url/${short}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            http://localhost:3000/url/{short}
          </a>
        </p>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: '500px',
    margin: '80px auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, #f0f4ff, #ffffff)',
    fontFamily: "'Segoe UI', sans-serif",
    transition: 'all 0.3s ease-in-out',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    fontSize: '16px',
    marginBottom: '15px',
    border: '2px solid #d0d7ff',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },
  result: {
    marginTop: '25px',
    fontSize: '18px',
    color: '#1d4ed8',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#2563eb',
    transition: 'color 0.3s ease',
  },
  error: {
    color: '#dc2626',
    marginTop: '10px',
    fontSize: '15px',
  },
};
