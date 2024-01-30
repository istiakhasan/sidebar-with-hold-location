import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "45px",
    height: "auto",
    borderRadius: "4px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "auto",
    padding: "0 16px",
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
    padding: "14px",
    fontSize: 14,
    paddingLeft: 20,
    zIndex: 99999999,
    background: state.isSelected ? "#00473e" : "white",
    borderBottom: "1px solid #C1C0C0",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 99999999 }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 16,
  }),
  // Add: 23/03/22
  menu: (provided) => ({ ...provided, zIndex: 9999999, marginTop: "0" }),
};

const CommonSelect = ({ control, setValue, options, fieldName, cb,values }) => {
  return (
    <Controller
      name="company_id"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Select
          styles={customStyles} 
          value={values?.company_id || ""}
          options={[
            ...options,
            { label: "all", value: 1 },
            { label: "db", value: 2 },
          ]}
          onChange={(valueOption) => {
            field.onChange(() => {
              setValue(fieldName, valueOption);
              cb && cb();
            });
            
          }}
        />
      )}
    />
  );
};

export default CommonSelect;
