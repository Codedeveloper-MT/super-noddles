import sql from "better-sqlite3";
import path from "path";

const db = sql(path.join(process.cwd(), "community.db"));

type RecipeRow = {
  id: number;
  slug: string;
  title: string;
  image: string | null;
  summary: string | null;
  description: string | null;
  cooking_time: string | null;
  difficulty: string | null;
  servings: number | null;
  ingredients: string;
  instructions: string;
};

export type Recipe = Omit<RecipeRow, "ingredients" | "instructions"> & {
  ingredients: string[];
  instructions: string[];
};

function toRecipe(row: RecipeRow): Recipe {
  return {
    ...row,
    ingredients: JSON.parse(row.ingredients),
    instructions: JSON.parse(row.instructions),
  };
}

export function getAllRecipes(): Recipe[] {
  const rows = db
    .prepare("SELECT * FROM recipes ORDER BY id")
    .all() as RecipeRow[];
  return rows.map(toRecipe);
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  const row = db
    .prepare("SELECT * FROM recipes WHERE slug = ?")
    .get(slug) as RecipeRow | undefined;
  return row ? toRecipe(row) : undefined;
}