export * from "./config";
export * from "./env";

export enum StatusTypes {
  booking = "7",
  delete = "6",
  block = "5",
  Available = "2",
  draft = "1",
  default = "0",
}

export enum UserTypeID {
  companyAdmin = 1,
  agent = 2,
  owner = 3,
  freelancer = 4,
  aqaryManagementUser = 5,
  superAdmin = 6,
  companyUser = 7,
}

export enum PlatformID {
  dashboard = 1,
}

export const VAT_PERCENTAGE = 5;
export const CategoriesOptions = {
  "1": "Sale",
  "2": "Rent",
  "3": "Swap",
} as const;

export const noImagePreview = "/images/no-image.jpg";
