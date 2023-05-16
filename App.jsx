import React from 'react';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather
        city="New York"
        temperature={25}
        description="Sunny"
        icon="https://example.com/weather-icon.png"
      />
    </div>
  );
}

export default App;
