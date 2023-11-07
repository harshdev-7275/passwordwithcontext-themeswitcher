import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { ThemeProvider } from './contexts/Theme';
import './App.css';
import Input from './components/Input';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const cardClass = `border p-10 border-black rounded-md ${
    isDarkMode ? 'bg-black' : 'bg-white'
  }`;
  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <div className="overflow-hidden w-full h-[100vh] flex items-center justify-center">
        {isDarkMode ? (
          <MdDarkMode
            className="absolute top-[35%] left-[65%] text-3xl"
            onClick={toggleDarkMode}
          />
        ) : (
          <BsFillSunFill
            className="absolute top-[35%] left-[65%] text-3xl"
            onClick={toggleDarkMode}
          />
        )}
        <div
          className={`border p-10 border-black rounded-md ${
            isDarkMode ? 'bg-black' : 'bg-white'
          }`}
        >
          <Input />
        </div>

        {/* <div className={cardClass}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <Input />
      </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
