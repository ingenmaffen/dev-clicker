export const developableAppProperties = [
    {
        type: "small",
        icon: "assets/block.png",
        time: 60,
        valueMultiplier: 1,
        requiredDevelopers: 0
    },
    {
        type: "medium",
        icon: "assets/blockchain.png",
        time: 150,
        valueMultiplier: 2.5,
        requiredDevelopers: 3
    },
    {
        type: "large",
        icon: "assets/blocks.png",
        time: 300,
        valueMultiplier: 10,
        requiredDevelopers: 5,
    }
];

export const getAppByType = (appType) => developableAppProperties.find(app => app.type === appType);