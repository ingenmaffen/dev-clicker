export interface HumanResource {
    type: HumanResourceType;
    displayText: string;
    icon: string;
}

export enum HumanResourceType {
    DEVELOPER = "developer",
    TESTER = "tester",
    BUSINESS_ANALYST = "businessAnalyst",
    PRODUCT_OWNER = "productOwner",
}
