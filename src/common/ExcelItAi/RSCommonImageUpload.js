import React from "react";

const CommonImageUpload = (props) => {
  const { name, errors, register } = props;
  return (
    <div>
      <div
        className={
          "file_upload bg-white border border-[#ADAAAA] rounded-[5px] flex justify-between items-center min-h-[40px] px-[12px] "
        }
      >
        <span className="font-medium text-base leading-6 text-[#ADAAAA]">
          {props?.getValues()[name]?.length > 0 &&
          props?.getValues()[name] instanceof FileList
            ? props?.getValues()[name][0]?.name
            : "Upload Image"}
        </span>

        <input
          {...register(name, { required: true })}
          name={name}
          type="file"
          className="hidden"
          id={`actual-btn-${name}`}
        />
        <label
          htmlFor={`actual-btn-${name}`}
          className="font-normal text-base leading-5 text-[#595858] cursor-pointer"
        >
          <img
            src={"/images/icons/upload.png"}
            className="h-3 w-3"
            alt="click"
          />
        </label>
      </div>
      {errors[name] && (
        <span className="text-xs text-red-500 font-semibold">
          The field is Required.
        </span>
      )}
    </div>
  );
};

export default CommonImageUpload;
