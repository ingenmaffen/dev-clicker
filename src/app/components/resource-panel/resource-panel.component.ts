import { Component } from "@angular/core";

@Component({
    selector: "dc-resource-panel",
    templateUrl: "./resource-panel.component.html",
    styleUrls: ["./resource-panel.component.scss"],
})
export class ResourcePanelComponent {
    public humanResources = [
        {
            type: "developer",
            displayText: "Developer",
            icon: "assets/coding.png",
        },
        {
            type: "tester",
            displayText: "Tester",
            icon: "assets/bug.png",
        },
        {
            type: "businessAnalyst",
            displayText: "Business Analyst",
            icon: "assets/analytics.png",
        },
        {
            type: "productOwner",
            displayText: "Product Owner",
            icon: "assets/user.png",
        },
    ];

    public hire(resourceType: string): void {}
}
