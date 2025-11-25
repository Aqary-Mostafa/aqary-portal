export enum LocalizationType {
  en = "en",
  ar = "ar",
}

export type BannerPackageType = {
  id: number;
  quantity: number;
  counts_per_banner: number;
  label: string;
  label_ar?: string;
};

export enum OathConstants {
  ProviderTypes = "PROVIDRTYPES",
  EnvironmentTypes = "ENVIRONMENTS",
  PlatformTypes = "PLATFROMTYPE",
}

export interface LocationItems {
  id: number;
  address_string: string;
}

export interface DarwerList {
  head: { label: string; tLabel: string; icon: React.ReactNode; url: string };
  list: {
    id: number;
    label: string;
    tLabel: string;
    icon: React.ReactNode;
    url: string;
    active?: string;
  }[];
}
