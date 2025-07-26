export interface Model {
  id: string;
  name: string;
  category: string; // "female" | "male" | "plus size" | "vintage" | "modern"
  style: string;
  ageGroup: string;
  mainImage: string;
  alternateImage?: string;
}

export const models: Model[] = [
  {
    id: "model-001",
    name: "Ayla",
    category: "female",
    style: "Modern",
    ageGroup: "20-25",
    mainImage: "/models/model-001.webp",
  },
  {
    id: "model-002",
    name: "Kerem",
    category: "male",
    style: "Modern",
    ageGroup: "25-30",
    mainImage: "/models/model-002.webp",
  },
  {
    id: "model-003",
    name: "Zeynep",
    category: "female",
    style: "Vintage",
    ageGroup: "20-25",
    mainImage: "/models/model-003.webp",
  },
  {
    id: "model-004",
    name: "Deniz",
    category: "plus size",
    style: "Modern",
    ageGroup: "25-30",
    mainImage: "/models/model-004.webp",
  },
  {
    id: "model-005",
    name: "Mert",
    category: "male",
    style: "Vintage",
    ageGroup: "30-35",
    mainImage: "/models/model-005.webp",
  },
  {
    id: "model-006",
    name: "Selin",
    category: "female",
    style: "Modern",
    ageGroup: "25-30",
    mainImage: "/models/model-006.webp",
  },
  {
    id: "model-007",
    name: "Can",
    category: "male",
    style: "Modern",
    ageGroup: "20-25",
    mainImage: "/models/model-007.webp",
  },
  {
    id: "model-008",
    name: "Ece",
    category: "female",
    style: "Vintage",
    ageGroup: "25-30",
    mainImage: "/models/model-008.webp",
  },
  {
    id: "model-009",
    name: "Aylin",
    category: "plus size",
    style: "Vintage",
    ageGroup: "30-35",
    mainImage: "/models/model-009.webp",
  }
];
