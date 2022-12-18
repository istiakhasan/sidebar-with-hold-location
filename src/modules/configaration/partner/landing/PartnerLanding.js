import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import JsFormInput from "../../../../common/JsFormInput";
import Jsinput from "../../../../common/Jsinput";

const PartnerLanding = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="header ">
        <Button onClick={() => setShow(true)} variant="contained">
          + Add Partner
        </Button>
      </div>


 

      {/* add partner modal  */}
      <CustomModal
        setShow={setShow}
        title={"Partner Create"}
        show={show}
      >
             <div className="global-wrappar-shadow">
          <div className="row p-0">
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
            <div className="col-md-3">
              <JsFormInput name="name" placeholder="Name.." label={"Partner Name"} />
            </div>
          </div>
      </div>
      </CustomModal>
    </div>
  );
};

export default PartnerLanding;
