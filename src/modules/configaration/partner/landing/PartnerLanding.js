import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomModal from "../../../../common/CustomModal";

const PartnerLanding = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="header">
        <Button onClick={()=>setShow(true)} variant="contained">+ Add Partner</Button>
      </div>

      {/* add partner modal  */}
      <CustomModal setShow={setShow} title={"Partner Create"} show={show}></CustomModal>
    </div>
  );
};

export default PartnerLanding;
