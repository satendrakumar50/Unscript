
import React from 'react';

const Header = ({ menuOptions }) => {
  return (
    <div className="flex  p-2 shadow-lg w-full">
      <div className="ml-20">
        <img
          className="h-8 w-28"
          alt="logo"
          src="https://media.licdn.com/dms/image/v2/D560BAQFlFvYvT4pAzQ/company-logo_200_200/company-logo_200_200/0/1704439048873/unscriptai_logo?e=1737590400&v=beta&t=0a8UDMIfU7Hg__OAcxLsxzngzPumb0k5ezwx3Fi1S28"
        />
      </div>

      <div className="content-center ml-96">
        <ul>
          <li>
            {menuOptions.map((menu, index) => (
              <select key={index} name={menu.name} id={menu.name}>
                {menu.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ))}
          </li>
        </ul>
      </div>

      <div className="flex content-end ml-32">
        <button className='bg-blue-600 text-white rounded-md p-2'>Contact Sales</button>
      </div>
    </div>
  );
};

export default Header;
