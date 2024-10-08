import "./human-resources.css";
import { HumanResourceType, humanResources } from "../human-resources-model";
import { HirePersonButton } from "../../../shared/components/hire-person-button";
import { HumanResourceState } from "../../../shared/game-state";
import { ReactSetFunction } from "../../../shared/react-override";

export interface HumanResourcesProps {
  humanResourceState: HumanResourceState;
  setHumanResourceState: ReactSetFunction<HumanResourceState>;
}

export const HumanResources = (props: HumanResourcesProps) => {
  const { humanResourceState, setHumanResourceState } = props;
  const buyHumanResource = (type: HumanResourceType) => {
    const updatedResourceState = {
      ...humanResourceState,
      [type]: humanResourceState[type] + 1,
    };
    setHumanResourceState(updatedResourceState);
  };

  return (
    <div className="human-resources-panel" data-testid="human-resources-panel">
      {humanResources.map((person) => (
        <HirePersonButton onClick={() => buyHumanResource(person.type)} key={person.type} numberOfResources={humanResourceState[person.type]} {...person} />
      ))}
    </div>
  );
};
