import { AppList, AppListProps } from "./components/app-list";

interface DevelopPanelProps extends AppListProps {}

export const DevelopPanel = ({ appState, setAppState, humanResources }: DevelopPanelProps) => (
  <AppList appState={appState} setAppState={setAppState} humanResources={humanResources} />
);
