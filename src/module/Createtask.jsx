import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Createtask({ modal, toggle ,save}) {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");

  const handlechange =(e)=>{

        const{name,value}=e.target

        if(name==="taskname"){
            setTaskname(value)
        }
        else{
            setDescription(value)
        }

  }
  

  const handleSave=(e)=>{
    e.preventDefault()
    let taskobj={}
    taskobj["Name"]=taskname
    taskobj["Description"]=description
    save(taskobj)
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
              rows="10"
              className="form-control"
              value={description}
              onChange={handlechange}
              name="discription"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
