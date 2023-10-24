import React, { useEffect, useState } from "react";
import Createtask from "../module/Createtask";
import Card from "./Card";

export default function Todoslist() {
  const [modal, setmodal] = useState(false);
  const [tasklist, setTasklist] = useState([]);

    useEffect(() => {
    let arr = localStorage.getItem("tasklist");
    if (arr) {
      let obj = JSON.parse(arr);
      setTasklist(obj);
    }
  }, []);

  const deletetask = (index) => {
    let tempList = tasklist;
    tempList.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };

  const updatelistarray = (obj, index) => {
    let tempList = tasklist;
    tempList[index] = obj;
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setmodal(modal);
  };

  const saveTask = (taskobj) => {
    let tempList = tasklist;
    tempList.push(taskobj);
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setmodal(false);
    setTasklist(tempList);
  };

  return (
    <>
      <div className="header text-center">
        <h1>Todo-list</h1>
        <button className="btn btn-primary mt-2" onClick={() => setmodal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {tasklist &&
          tasklist.map((obj, index) => (
            <Card
              taskobj={obj}
              index={index}
              deletetask={deletetask}
              updatelistarray={updatelistarray}
            />
          ))}
      </div>
      <Createtask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
}
