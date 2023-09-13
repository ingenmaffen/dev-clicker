import { Component } from "@angular/core";
import { HumanResource } from "src/app/models/resources.model";
import { ResourcesService } from "src/app/services/resources.service";

@Component({
    selector: "dc-resource-panel",
    templateUrl: "./resource-panel.component.html",
    styleUrls: ["./resource-panel.component.scss"],
})
export class ResourcePanelComponent {
    public humanResources: HumanResource[];

    constructor(private resourcesService: ResourcesService) {
        this.humanResources = this.resourcesService.getHumanResources();
    }

    public hire(resourceType: string): void {}
}
