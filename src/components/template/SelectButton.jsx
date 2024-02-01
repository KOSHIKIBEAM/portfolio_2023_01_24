import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "عربي",
    country_code: "sa",
  },
];

const SelectButton = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className="text-[#198754] dark:text-white transition-all duration-500 ml-5"
          variant="success"
          id="dropdown-basic"
        >
          Translation
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            className="flex justify-start items-center pr-0 pl-6"
          >
            <span className="fi fi-jp mr-3"></span>
            Japan
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-1"
            className="flex justify-start items-center pr-0 pl-6"
          >
            <span className="fi fi-us mr-3"></span>
            America
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-1"
            className="flex justify-start items-center pr-0 pl-6"
          >
            <span className="fi fi-th mr-3"></span>
            Thailand
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default SelectButton;
