export interface App {
    type: AppType;
    icon: string;
    time: number;
    valueMultiplier: number;
    requiredDevelopers: number;
}

export enum AppType {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}
