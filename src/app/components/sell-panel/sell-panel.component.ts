import { Component } from "@angular/core";

@Component({
    selector: "dc-sell-panel",
    templateUrl: "./sell-panel.component.html",
    styleUrls: ["./sell-panel.component.scss"],
})
export class SellPanelComponent {
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

    public selectedAppType: string = "small";

    public get isSellButtonDisabled(): boolean {
        return false;
    }

    public sellApp(): void {}
}
