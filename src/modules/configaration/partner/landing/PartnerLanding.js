import React, { useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import PartnerForm from "../form/PartnerForm";
import JsButton from "../../../../common/JsButton";
import PartnerListTable from "../table/PartnerListTable";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../common/loding";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import { baseUrs } from "../../../../helpers/config/config.Env";

const PartnerLanding = () => {
  const saveRef = useRef();
  const [show, setShow] = useState(false);
  const [user]=useAuthState(auth)
  const { isLoading, error, data, refetch } = useQuery(["partnerlist"], () =>
    fetch(`${baseUrs()}/partner?email=${user?.email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Loading />;
  }

  return (
    <form>
      <JsButton
        style={{
          position: "absolute",
          top: "0",
          right: "0px",
        }}
        onClick={() => setShow(true)}
      >
        + Add Partner
      </JsButton>

      <PartnerListTable refetch={refetch} gridData={data?.data} />

      {show && (
        <CustomModal
          setShow={setShow}
          title={"Partner Create"}
          show={show}
          saveRef={saveRef}
        >
          <PartnerForm refetch={refetch} setShow={setShow} saveRef={saveRef} />
        </CustomModal>
      )}
    </form>
  );
};

export default PartnerLanding;
