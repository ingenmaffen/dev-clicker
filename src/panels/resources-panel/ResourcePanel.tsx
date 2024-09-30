import "./ResourcePanel.css";
import { humanResourceProperties } from "../../shared/HumanResourceProperties";
import { HirePersonButton } from "../../shared/components/HirePersonButton";

interface ResourcePanelProps {
  humanResourceState: any; // TODO
  setHumanResourceState: any; // TODO
}

export const ResourcePanel = (props: ResourcePanelProps) => {
  const { humanResourceState, setHumanResourceState } = props;
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
