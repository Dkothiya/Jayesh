import React, { useState } from "react";
import Edit from "../module/Edit";

export default function Card({ taskobj, index, deletetask, updatelistarray }) {
  const [modal, setmodal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      sencondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      sencondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      sencondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      sencondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      sencondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setmodal(!modal);
  };

  const updatetask = (obj) => {
    updatelistarray(obj, index);
  };

  const handleDelete = () => {
    deletetask(index);
  };

  return (
    <div className="card-wrapper ms-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].sencondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskobj.Name}
        </span>
        <p className="mt-3">{taskobj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit "
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setmodal(true)}
          ></i>
          <i
            className="fas fa-trash-alt "
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <Edit
        modal={modal}
        toggle={toggle}
        updatetask={updatetask}
        taskobj={taskobj}
      />
    </div>
  );
}
