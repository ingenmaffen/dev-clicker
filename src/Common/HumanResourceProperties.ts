export enum HumanResourceType {
  DEVELOPER = "developer",
  TESTER = "tester",
  BUSINESS_ANALYST = "businessAnalyst",
  PRODUCT_OWNER = "productOwner",
}

export interface HumanResource {
  type: HumanResourceType;
  displayText: string;
  icon: string;
}

export const humanResourceProperties: HumanResource[] = [
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
