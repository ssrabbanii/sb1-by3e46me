export interface ImpactStats {
  totalContributions: number;
  mealsProvided: number;
  familiesHelped: number;
  partneredBanks: number;
}

export interface BeneficiaryStory {
  id: string;
  name: string;
  location: string;
  story: string;
  image: string;
  impact: string;
}

export interface FoodBank {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  contributionsReceived: number;
  mealsProvided: number;
}