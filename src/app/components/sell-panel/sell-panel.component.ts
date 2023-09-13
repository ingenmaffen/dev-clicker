import { Component } from "@angular/core";
import { App, AppType } from "src/app/models/app.model";
import { AppService } from "src/app/services/app.service";

@Component({
    selector: "dc-sell-panel",
    templateUrl: "./sell-panel.component.html",
    styleUrls: ["./sell-panel.component.scss"],
})
export class SellPanelComponent {
    public appTypes: App[];

    public selectedAppType: AppType = AppType.SMALL;

    constructor(private appService: AppService) {
        this.appTypes = this.appService.getApps();
    }

    public get isSellButtonDisabled(): boolean {
        return false;
    }

    public sellApp(): void {}
}
