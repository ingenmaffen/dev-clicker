import { Component } from "@angular/core";
import { App } from "src/app/models/app.model";
import { AppService } from "src/app/services/app.service";

@Component({
    selector: "dc-develop-panel",
    templateUrl: "./develop-panel.component.html",
    styleUrls: ["./develop-panel.component.scss"],
})
export class DevelopPanelComponent {
    public appTypes: App[];

    constructor(private appService: AppService) {
        this.appTypes = this.appService.getApps();
    }

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
