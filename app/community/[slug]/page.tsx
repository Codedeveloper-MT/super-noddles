import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipes, getRecipeBySlug } from "@/lib/community";
import styles from "./recipe.module.css";

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({ slug: recipe.slug }));
}

async function RecipeContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) notFound();

  return (
    <article className={styles.page}>
      <Link href="/community" className={styles.back}>
        ← Back to recipes
      </Link>

      <h1 className={styles.title}>{recipe.title}</h1>
      <p className={styles.summary}>{recipe.summary}</p>

      {recipe.image && (
        <div className={styles.imageWrap}>
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className={styles.image}
            priority
          />
        </div>
      )}

      <ul className={styles.facts}>
        <li><strong>Time</strong> {recipe.cooking_time}</li>
        <li><strong>Difficulty</strong> {recipe.difficulty}</li>
        <li><strong>Serves</strong> {recipe.servings}</li>
      </ul>

      <p className={styles.description}>{recipe.description}</p>

      <div className={styles.columns}>
        <section className={styles.box}>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.box}>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p style={{ padding: "2rem" }}>Loading recipe...</p>}>
      <RecipeContent params={params} />
    </Suspense>
  );
}