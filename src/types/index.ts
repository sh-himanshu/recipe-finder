export interface SearchData {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Hit[];
}

interface Hit {
  recipe: RecipeData;
  bookmarked: boolean;
  bought: boolean;
}

export interface RecipeData {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  digest: Digest[];
}

interface Digest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: Sub[];
}

interface Sub {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

interface TotalDaily {
  ENERC_KCAL: ENERCKCAL;
  FAT: ENERCKCAL;
  FASAT: ENERCKCAL;
  CHOCDF: ENERCKCAL;
  FIBTG: ENERCKCAL;
  PROCNT: ENERCKCAL;
  CHOLE: ENERCKCAL;
  NA: ENERCKCAL;
  CA: ENERCKCAL;
  MG: ENERCKCAL;
  K: ENERCKCAL;
  FE: ENERCKCAL;
  ZN: ENERCKCAL;
  P: ENERCKCAL;
  VITA_RAE: ENERCKCAL;
  VITC: ENERCKCAL;
  THIA: ENERCKCAL;
  RIBF: ENERCKCAL;
  NIA: ENERCKCAL;
  VITB6A: ENERCKCAL;
  FOLDFE: ENERCKCAL;
  VITB12: ENERCKCAL;
  VITD: ENERCKCAL;
  TOCPHA: ENERCKCAL;
  VITK1: ENERCKCAL;
}

interface TotalNutrients {
  ENERC_KCAL: ENERCKCAL;
  FAT: ENERCKCAL;
  FASAT: ENERCKCAL;
  FATRN: ENERCKCAL;
  FAMS: ENERCKCAL;
  FAPU: ENERCKCAL;
  CHOCDF: ENERCKCAL;
  "CHOCDF.net": ENERCKCAL;
  FIBTG: ENERCKCAL;
  SUGAR: ENERCKCAL;
  "SUGAR.added": ENERCKCAL;
  PROCNT: ENERCKCAL;
  CHOLE: ENERCKCAL;
  NA: ENERCKCAL;
  CA: ENERCKCAL;
  MG: ENERCKCAL;
  K: ENERCKCAL;
  FE: ENERCKCAL;
  ZN: ENERCKCAL;
  P: ENERCKCAL;
  VITA_RAE: ENERCKCAL;
  VITC: ENERCKCAL;
  THIA: ENERCKCAL;
  RIBF: ENERCKCAL;
  NIA: ENERCKCAL;
  VITB6A: ENERCKCAL;
  FOLDFE: ENERCKCAL;
  FOLFD: ENERCKCAL;
  FOLAC: ENERCKCAL;
  VITB12: ENERCKCAL;
  VITD: ENERCKCAL;
  TOCPHA: ENERCKCAL;
  VITK1: ENERCKCAL;
  "Sugar.alcohol": ENERCKCAL;
  WATER: ENERCKCAL;
}

interface ENERCKCAL {
  label: string;
  quantity: number;
  unit: string;
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
}
