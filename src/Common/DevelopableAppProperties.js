export const developableAppProperties = [
    {
        text: "Develop a small app",
        type: "small",
        time: 60,
        valueMultiplier: 1,
        requiredDevelopers: 0
    },
    {
        text: "Develop medium app",
        type: "medium",
        time: 150,
        valueMultiplier: 2.5,
        requiredDevelopers: 3
    },
    {
        text: "Develop large app",
        type: "large",
        time: 300,
        valueMultiplier: 1,
        requiredDevelopers: 5
    }
];

export const getAppByType = (appType) => developableAppProperties.find(app => app.type === appType);