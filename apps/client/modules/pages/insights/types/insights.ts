import { ConstantsTypes } from '@/types/shared';

export interface PropertyInsightType {
  id: number;
  ref_no: string;
  property_name: string;
  property_type: string;
  bedrooms: string;
  life_style: string;
  bathroom: number;
  agent: string;
  price: number;
  subscription: string;
  status: string;
  performance: {
    impressions: number;
    views: number;
    leads: number;
  };
  description_quality: number;
  max_character_allowed: number;
  media_quality: number;
  plot_area: number;
  unit_of_measure: string;
  created_at: string;
  updated_at: string;
  percentage?: number;
  country: ConstantsTypes;
  state: ConstantsTypes;
  city: ConstantsTypes;
  community: ConstantsTypes;
  subcommunity: ConstantsTypes;
}
