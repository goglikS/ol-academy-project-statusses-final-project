import React from "react";

const CreateGroup = () => {
  return (
    <div className="form">
      <h1>CreateGroup</h1>
      <form>
        <input placeholder="enter group name" />
        <input placeholder="add students" />
        <input placeholder="add tasks" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateGroup;
