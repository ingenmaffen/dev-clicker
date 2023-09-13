import { Injectable } from "@angular/core";
import { HumanResource, HumanResourceType } from "../models/resources.model";

@Injectable({
    providedIn: "root",
})
export class ResourcesService {
    private humanResources: HumanResource[] = [
        {
            type: HumanResourceType.DEVELOPER,
            displayText: "Developer",
            icon: "assets/coding.png",
        },
        {
            type: HumanResourceType.TESTER,
            displayText: "Tester",
            icon: "assets/bug.png",
        },
        {
            type: HumanResourceType.BUSINESS_ANALYST,
            displayText: "Business Analyst",
            icon: "assets/analytics.png",
        },
        {
            type: HumanResourceType.PRODUCT_OWNER,
            displayText: "Product Owner",
            icon: "assets/user.png",
        },
    ];

    constructor() {}

    public getHumanResources(): HumanResource[] {
        return this.humanResources;
    }
}
