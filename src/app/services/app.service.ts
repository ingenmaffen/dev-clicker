import { Injectable } from "@angular/core";
import { App, AppType } from "../models/app.model";

@Injectable({
    providedIn: "root",
})
export class AppService {
    private appTypes: App[] = [
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

    constructor() {}

    public getApps(): App[] {
        return this.appTypes;
    }
}
