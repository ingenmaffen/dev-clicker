export enum AppType {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface App {
  type: AppType;
  icon: string;
  time: number;
  valueMultiplier: number;
  requiredDevelopers: number;
}

export const developableApps: App[] = [
  {
    type: AppType.SMALL,
    icon: "assets/block.png",
    time: 60,
    valueMultiplier: 1,
    requiredDevelopers: 0,
  },
  {
    type: AppType.MEDIUM,
    icon: "assets/blockchain.png",
    time: 150,
    valueMultiplier: 2.5,
    requiredDevelopers: 3,
  },
  {
    type: AppType.LARGE,
    icon: "assets/blocks.png",
    time: 300,
    valueMultiplier: 10,
    requiredDevelopers: 5,
  },
];

export const getAppByType = (appType: AppType) => developableApps.find((app) => app.type === appType);
