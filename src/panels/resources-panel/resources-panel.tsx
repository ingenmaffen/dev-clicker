import { HumanResources, HumanResourcesProps } from "./components/human-resources";

interface ResourcePanelProps extends HumanResourcesProps {}

export const ResourcesPanel = (props: ResourcePanelProps) => <HumanResources {...props} />;
