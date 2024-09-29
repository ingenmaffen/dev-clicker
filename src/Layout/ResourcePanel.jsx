import "./ResourcePanel.css";
import { humanResourceProperties } from "../Common/HumanResourceProperties";
import { HirePersonButton } from "../Common/HirePersonButton";

export const ResourcePanel = ({ humanResourceState, setHumanResourceState }) => {
  const buyHumanResource = (type) => {
    const updatedResourceState = {
      ...humanResourceState,
      [type]: humanResourceState[type] + 1,
    };
    setHumanResourceState(updatedResourceState);
  };

  return (
    <div className="human-resources-panel">
      {humanResourceProperties.map((person) => (
        <HirePersonButton onClick={() => buyHumanResource(person.type)} key={person.type} numberOfResources={humanResourceState[person.type]} {...person} />
      ))}
    </div>
  );
};
