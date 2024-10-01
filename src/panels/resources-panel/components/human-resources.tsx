import "./human-resources.css";
import { humanResources } from "../human-resources-model";
import { HirePersonButton } from "../../../shared/components/hire-person-button";

export interface HumanResourcesProps {
  humanResourceState: any; // TODO
  setHumanResourceState: any; // TODO
}

export const HumanResources = (props: HumanResourcesProps) => {
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
      {humanResources.map((person) => (
        <HirePersonButton onClick={() => buyHumanResource(person.type)} key={person.type} numberOfResources={humanResourceState[person.type]} {...person} />
      ))}
    </div>
  );
};
