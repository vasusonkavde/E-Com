import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slider';
import './TrackingScreen.css';

const TrackingScreen = () => {
  const [time, setTime] = useState(120);
  const [speed, setSpeed] = useState(1);
  const [quote, setQuote] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    intervalRef.current = interval;
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev > 0 ? prev - 1 : 0);
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [speed]);

  const fetchQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=food', {
      headers: { 'X-Api-Key': '5KAR41zegO4UUkcfU9MjqA==iDZduU4CLLN2jYkE' }
    });
    const data = await response.json();
    setQuote(data[0].quote);
  };

  const handleShare = () => {
    const url = `${window.location.origin}/tracking?time=${time}&speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard');
  };

  return (
    <div className="tracking-screen">
      <h1>Tracking Screen</h1>
      <div className="clock">{Math.floor(time / 60)}:{time % 60}</div>
      <Slider
        value={speed}
        min={0.5}
        max={5}
        step={0.5}
        onChange={value => setSpeed(value)}
        className="custom-slider"
        renderThumb={(props, state) => <div {...props} key={state.index} className="thumb" />}
        renderTrack={(props, state) => <div {...props} key={state.index} className="track" />}
      />
      <button onClick={handleShare}>Share</button>
      <div className="quote">{quote}</div>
    </div>
  );
};

export default TrackingScreen;
