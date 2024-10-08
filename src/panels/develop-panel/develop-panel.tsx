import { AppList, AppListProps } from "./components/app-list";

interface DevelopPanelProps extends AppListProps {}

export const DevelopPanel = (props: DevelopPanelProps) => <AppList {...props} />;
