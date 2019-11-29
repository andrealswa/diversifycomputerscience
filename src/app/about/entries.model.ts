export interface Entries {
  name: string;
  affiliatedInstitution: string;
  email: string;
  country: string;
  socialMedia: string;
  selfID: string;
  gender: string;
  duration: number;
  calories: number;
  currentCareerStage: string;
  branch: string;
  subfieldKeywords: string;
  date?: Date;
  state?: "completed" | "cancelled" | null;
}
