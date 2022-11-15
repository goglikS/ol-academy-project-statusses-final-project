import { useState } from "react";
import useLocalStorage from "../LocalStorage";

function CreateGroup() {
  const [groupName, setGroupName] = useLocalStorage("groupName");
  const [inputValue, setInputValue] = useState(groupName ? groupName : "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setGroupName(e.target.value);
  };

  return (
    <div>
      <div>
        <div>Group Name</div>
        <div>
          <input
            type="text"
            placeholder="Enter GroupName"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
