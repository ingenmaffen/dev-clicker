import { Component } from "@angular/core";

@Component({
    selector: "dc-develop-panel",
    templateUrl: "./develop-panel.component.html",
    styleUrls: ["./develop-panel.component.scss"],
})
export class DevelopPanelComponent {
    public appTypes = [
        {
            type: "small",
            icon: "assets/block.png",
            time: 60,
            valueMultiplier: 1,
            requiredDevelopers: 0,
        },
        {
            type: "medium",
            icon: "assets/blockchain.png",
            time: 150,
            valueMultiplier: 2.5,
            requiredDevelopers: 3,
        },
        {
            type: "large",
            icon: "assets/blocks.png",
            time: 300,
            valueMultiplier: 10,
            requiredDevelopers: 5,
        },
    ];

    public developApp(appType: string): void {
        console.log(appType);
    }

    public isButtonDisabled(appType: string): boolean {
        return false;
    }

    public getDevelopmentTime(appType: string): string | null {
        return null;
    }
}
