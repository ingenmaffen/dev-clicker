import { HumanResources, HumanResourcesProps } from "./components/human-resources";

interface ResourcePanelProps extends HumanResourcesProps {}

export const ResourcesPanel = ({ humanResourceState, setHumanResourceState }: ResourcePanelProps) => (
  <HumanResources humanResourceState={humanResourceState} setHumanResourceState={setHumanResourceState} />
);
