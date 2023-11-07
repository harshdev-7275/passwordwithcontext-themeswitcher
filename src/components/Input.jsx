import React, { useState } from 'react';
import useTheme from '../contexts/Theme';
import { AiFillEye } from 'react-icons/ai';
function Input() {
  const { isDarkMode } = useTheme();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const userNameHandler = e => {
    setUserName(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };
  const passShowHandler = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className="flex gap-3">
      <div
        className={`flex flex-col gap-3 p-2 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
      >
        <h1>UserName: </h1>
        <h1>Password: </h1>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <input
          type="text"
          className="outline-none border border-black py-1 px-2 rounded-md"
          placeholder="Enter the username"
          value={username}
          onChange={userNameHandler}
        />
        <div className="flex items-center justify-center gap-2">
          <input
            type={isPassword ? 'password' : 'text'}
            className="outline-none border border-black py-1 px-2 rounded-md"
            placeholder="Enter the password"
            value={password}
            onChange={passwordHandler}
          />
          <AiFillEye
            onClick={passShowHandler}
            className={`cursor-pointer ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
