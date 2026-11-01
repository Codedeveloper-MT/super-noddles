import Image from "next/image";
import Link from "next/link";
import styles from "./community.module.css";
import { getAllRecipes } from "@/lib/community";

export default function CommunityPage() {
  const recipes = getAllRecipes();

  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1>Community Recipes</h1>
        <p>Noodle recipes shared by the Super Noddles community.</p>
      </section>

      {recipes.length === 0 ? (
        <p className={styles.empty}>No recipes yet. Be the first to share one!</p>
      ) : (
        <ul className={styles.grid}>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link href={`/community/${recipe.slug}`} className={styles.card}>
                {recipe.image && (
                  <div className={styles.imageWrap}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.image}
                    />
                  </div>
                )}
                <h2>{recipe.title}</h2>
                <p>{recipe.summary}</p>
                <p className={styles.meta}>
                  {recipe.cooking_time} · {recipe.difficulty} · serves{" "}
                  {recipe.servings}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}