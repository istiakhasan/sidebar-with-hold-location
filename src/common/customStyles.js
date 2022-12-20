const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "30px",
      height: "auto",
      borderRadius: "4px",
    }),
  
    valueContainer: (provided, state) => ({
      ...provided,
      height: "auto",
      padding: "0 6px",
    }),
  
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      fontSize: "14px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "28px",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: 1,
      fontSize: 14,
      paddingLeft: 7,
      zIndex: 99999999,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 99999999 }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: 14,
    }),
    // Add: 23/03/22
    menu: (provided) => ({ ...provided, zIndex: 9999999, marginTop: "0" }),
  };
  
  export default customStyles;
  