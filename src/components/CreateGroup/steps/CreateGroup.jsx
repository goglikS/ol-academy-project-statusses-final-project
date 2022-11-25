import { useState } from "react";
import useLocalStorage from "../../useLocalStorage";

function CreateGroup({ nextStep }) {
  const [groupName, setGroupName] = useLocalStorage("groupName");
  const [inputValue, setInputValue] = useState(groupName || "");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
    setGroupName(target.value);
  };

  return (
    <div>
      <div>
        <div>Group Name</div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter GroupName"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputValue(e.target.value);
                setGroupName(e.target.value);
                nextStep();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
