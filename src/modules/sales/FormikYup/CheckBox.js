import React from "react";

const CheckBox = ({data,setData,setFieldValue}) => {
 
  const handleChange=(value,i)=>{
       const  _data=[...data]
       _data[i]["isChecked"]=value
       setData(_data)
       setFieldValue("selectedItem",_data)
  }

  return (
    <div>
      {data.map((item,index) => (
        <div key={item.id}>
          <input 
          checked={item.isChecked}
          onChange={(e)=>{
            const check=e.target.checked
              handleChange(check,index)
          }} className="me2" type="checkbox" />
          <label style={{ marginLeft: "10px" }} className="ml-2">
            itemw
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
