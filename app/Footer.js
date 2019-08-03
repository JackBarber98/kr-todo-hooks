import React, { useContext } from 'react';
import { AppContext } from "./AppContext";
import { Switch as ThemeSwitch } from '@progress/kendo-react-inputs';
import { getCurrentDate } from './utils/date';

const Footer = () => {
  const context = useContext(AppContext);
  let currentDate = getCurrentDate('year', '');
  let handleSwitch = () => {
    let newValue = context.themeMode === 'light' ? 'dark' : 'light';
    context.changeTheme(newValue);
  }
  
  return (
    <div>
      The Todo Company &copy; {currentDate} &nbsp; | &nbsp;
      <ThemeSwitch
       onChange={() => handleSwitch()}
       checked={context.themeMode === 'light' ? true : false}
      /> &nbsp; <span>{context.themeMode}</span>
    </div>
  );
}

export default Footer;