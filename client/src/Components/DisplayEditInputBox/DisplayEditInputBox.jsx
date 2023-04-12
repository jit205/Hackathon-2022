import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editService } from "../../actions/service";
import "./DisplayEditInputBox.css";
import InnerFun from "./InnerFun";
function DisplayEditInputBox({ Sid, textTodisplay, adminUser, arryNm }) {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const [edit, setEdit] = useState(false);
  const handleSave = (operation) => {
    setEdit(false);
    dispatch(
      editService({
        id: Sid,
        serviceBody: { data: val, operation: operation, arryNm: arryNm },
      })
    );
  };
  const handleDelReqDoc = (delItem) => {
    dispatch(
      editService({
        id: Sid,
        serviceBody: { data: delItem, operation: "del", arryNm: arryNm },
      })
    );
  };
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <InnerFun
      textTodisplay={textTodisplay}
      adminUser={adminUser}
      handleSave={handleSave}
      handleDelReqDoc={handleDelReqDoc}
      setVal={setVal}
      val={val}
      handleEdit={handleEdit}
      edit={edit}
    />
  );
}
export default DisplayEditInputBox;
