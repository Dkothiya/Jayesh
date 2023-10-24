import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Edit({ modal, toggle, updatetask, taskobj }) {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "taskname") {
      setTaskname(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskname(taskobj.Name);
    setDescription(taskobj.Description);
  }, []);

  const handleupdate = (e) => {
    e.preventDefault();
    let tempobj = {};
    tempobj["Name"] = taskname;
    tempobj["Description"] =description ;
    updatetask(tempobj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskname}
              onChange={handlechange}
              name="taskname"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handlechange}
              name="discription"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleupdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
