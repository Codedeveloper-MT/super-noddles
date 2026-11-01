const sql = require("better-sqlite3");
const db = new sql("community.db");

const dummyData = [
  {
    slug: "shin-ramyun",
    title: "Shin Ramyun",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900",
    summary: "Rich, spicy Korean beef-flavoured broth with chewy noodles.",
    description: "Shin Ramyun is a famous Korean instant noodle dish known for its bold spicy broth and chewy noodles. It can be customised with eggs, mushrooms, vegetables and beef.",
    cookingTime: "10 minutes",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["1 packet Shin Ramyun", "550ml water", "1 egg", "2 spring onions", "4 mushrooms", "Fresh chilli"],
    instructions: [
      "Bring water to a boil in a cooking pot.",
      "Add the noodles, soup powder and vegetable flakes.",
      "Cook for approximately 4–5 minutes.",
      "Add sliced mushrooms and spring onions.",
      "Crack an egg into the soup and allow it to cook.",
      "Transfer into a serving bowl and garnish with chilli.",
      "Serve hot."
    ]
  },
  {
    slug: "mi-goreng",
    title: "Mi Goreng",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=900",
    summary: "Sweet, savoury and slightly spicy Indonesian fried noodles.",
    description: "Mi Goreng is an Indonesian-style fried noodle dish prepared without broth. It combines sweet soy sauce, savoury seasoning and chilli flavours. It is commonly served with a fried egg and fresh vegetables.",
    cookingTime: "8 minutes",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["1 packet Mi Goreng noodles", "Water for boiling", "1 egg", "1 tablespoon cooking oil", "Spring onions", "Chilli flakes"],
    instructions: [
      "Bring water to a boil.",
      "Add noodles and cook for approximately 3 minutes.",
      "Drain the water completely.",
      "Place the seasoning powder and sauces into a bowl.",
      "Add the noodles and mix until evenly coated.",
      "Fry an egg separately.",
      "Serve with spring onions and the fried egg."
    ]
  },
  {
    slug: "chicken-ramen",
    title: "Chicken Ramen",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=900",
    summary: "Comforting chicken broth with tender noodles and fresh vegetables.",
    description: "Chicken ramen is a comforting Japanese-inspired noodle meal made with savoury chicken broth, tender chicken and delicious toppings. It is perfect for lunch or dinner.",
    cookingTime: "25 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["2 portions ramen noodles", "2 cups chicken stock", "1 chicken breast", "2 eggs", "1 carrot", "Spring onions", "2 garlic cloves", "1 teaspoon ginger", "1 tablespoon soy sauce"],
    instructions: [
      "Season and cook the chicken breast until fully cooked.",
      "Allow the chicken to rest before slicing.",
      "Heat chicken stock in a cooking pot.",
      "Add garlic, ginger and soy sauce.",
      "Add sliced carrots and cook until tender.",
      "Cook the ramen noodles separately.",
      "Place noodles into serving bowls.",
      "Pour the hot chicken broth over the noodles.",
      "Add sliced chicken, boiled eggs and spring onions.",
      "Serve immediately."
    ]
  },
  {
    slug: "spicy-seafood-noodles",
    title: "Spicy Seafood Noodles",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=900",
    summary: "Spicy noodles loaded with prawns, seafood and aromatic broth.",
    description: "Spicy seafood noodles combine the delicious flavours of prawns, seafood, garlic and chilli. The rich broth makes this dish perfect for anyone who enjoys spicy seafood meals.",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    servings: 2,
    ingredients: ["2 portions noodles", "200g cleaned prawns", "1 cup seafood stock", "1 tablespoon chilli paste", "2 garlic cloves", "1 cup mushrooms", "Spring onions", "1 tablespoon soy sauce"],
    instructions: [
      "Clean and prepare the prawns.",
      "Heat cooking oil in a pot.",
      "Add chopped garlic and chilli paste.",
      "Pour in seafood stock and soy sauce.",
      "Bring the broth to a gentle boil.",
      "Add mushrooms and prawns.",
      "Cook until the prawns are fully cooked.",
      "Prepare noodles separately.",
      "Place noodles into bowls and pour over the seafood broth.",
      "Garnish with spring onions and serve."
    ]
  },
  {
    slug: "creamy-cheese-noodles",
    title: "Creamy Cheese Noodles",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=900",
    summary: "Creamy, cheesy noodles with a rich and delicious sauce.",
    description: "Creamy cheese noodles are a comforting meal made with melted cheddar cheese, milk and instant noodles. The creamy sauce coats every noodle, creating a delicious and satisfying dish.",
    cookingTime: "12 minutes",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["1 packet instant noodles", "1/2 cup milk", "1/2 cup grated cheddar cheese", "1 tablespoon butter", "Black pepper", "Spring onions", "1/2 teaspoon garlic powder"],
    instructions: [
      "Bring water to a boil and cook the noodles until almost ready.",
      "Drain most of the water.",
      "Melt butter in a separate pan.",
      "Add milk and garlic powder.",
      "Stir in grated cheese until melted.",
      "Add the noodles to the cheese sauce.",
      "Mix until completely coated.",
      "Season with black pepper.",
      "Garnish with spring onions and serve warm."
    ]
  },
  {
    slug: "vegetable-stir-fry-noodles",
    title: "Vegetable Stir-Fry Noodles",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    summary: "Colourful stir-fried noodles with crunchy vegetables and savoury sauce.",
    description: "Vegetable stir-fry noodles are a quick and delicious meal made with fresh vegetables, noodles and savoury soy sauce. This recipe is perfect for a simple homemade lunch or dinner.",
    cookingTime: "15 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["2 portions egg noodles", "1 carrot", "1 green pepper", "1 cup shredded cabbage", "2 tablespoons soy sauce", "Cooking oil", "2 garlic cloves", "Spring onions", "Sesame seeds"],
    instructions: [
      "Cook noodles according to the packet instructions.",
      "Drain the noodles and set aside.",
      "Wash and chop all vegetables into thin strips.",
      "Heat cooking oil in a frying pan.",
      "Add garlic and stir briefly.",
      "Add carrots, cabbage and green pepper.",
      "Stir-fry vegetables for 3–4 minutes.",
      "Add cooked noodles and soy sauce.",
      "Toss everything together.",
      "Garnish with spring onions and sesame seeds.",
      "Serve hot."
    ]
  },
  {
    slug: "beef-stir-fry-noodles",
    title: "Beef Stir-Fry Noodles",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=900",
    summary: "Tender beef strips tossed with noodles and a savoury Asian-inspired sauce.",
    description: "Beef stir-fry noodles are a flavourful meal made with tender beef strips, vegetables and noodles. The combination of soy sauce, garlic and ginger creates a rich savoury flavour.",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    servings: 2,
    ingredients: ["200g beef strips", "200g egg noodles", "1 green pepper", "1 carrot", "2 tablespoons soy sauce", "1 tablespoon oyster sauce", "2 garlic cloves", "1 teaspoon ginger", "Cooking oil"],
    instructions: [
      "Slice the beef into thin strips.",
      "Mix soy sauce, oyster sauce, garlic and ginger.",
      "Add the beef and marinate for 10 minutes.",
      "Cook noodles according to the packet instructions.",
      "Heat oil in a frying pan or wok.",
      "Add beef and stir-fry until fully cooked.",
      "Add chopped carrots and green pepper.",
      "Cook vegetables until slightly tender.",
      "Add noodles and remaining sauce.",
      "Toss together and serve hot."
    ]
  },
  {
    slug: "japanese-miso-ramen",
    title: "Japanese Miso Ramen",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=900",
    summary: "Japanese-style ramen with rich miso broth and delicious toppings.",
    description: "Miso ramen is a Japanese-inspired noodle dish featuring a savoury broth made with fermented soybean paste. It is commonly served with noodles, mushrooms, boiled eggs and spring onions.",
    cookingTime: "30 minutes",
    difficulty: "Medium",
    servings: 2,
    ingredients: ["2 portions ramen noodles", "3 cups vegetable stock", "2 tablespoons miso paste", "1 tablespoon soy sauce", "1 cup mushrooms", "2 boiled eggs", "Spring onions", "1 teaspoon sesame oil", "1 garlic clove"],
    instructions: [
      "Heat the stock in a cooking pot.",
      "Add chopped garlic and sesame oil.",
      "Reduce the heat and stir in miso paste.",
      "Add soy sauce and sliced mushrooms.",
      "Allow the broth to simmer gently.",
      "Cook ramen noodles separately.",
      "Divide noodles between serving bowls.",
      "Pour miso broth over the noodles.",
      "Add boiled eggs and spring onions.",
      "Serve immediately."
    ]
  },
  {
    slug: "pad-thai-noodles",
    title: "Pad Thai Noodles",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=900",
    summary: "Thai-inspired stir-fried rice noodles with peanuts, lime and fresh vegetables.",
    description: "Pad Thai is a popular Thai noodle dish made with rice noodles, a sweet and tangy sauce, vegetables and crushed peanuts. It is often served with lime and fresh herbs.",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    servings: 2,
    ingredients: ["200g rice noodles", "150g chicken strips", "1 egg", "2 tablespoons fish sauce", "1 tablespoon tamarind paste", "1 tablespoon brown sugar", "1/2 cup bean sprouts", "Spring onions", "Crushed peanuts", "1 lime"],
    instructions: [
      "Soak rice noodles in warm water until softened.",
      "Mix fish sauce, tamarind paste and brown sugar.",
      "Heat oil in a wok or frying pan.",
      "Cook chicken until fully cooked.",
      "Push chicken aside and scramble the egg.",
      "Add softened rice noodles.",
      "Pour in the prepared sauce.",
      "Toss everything together.",
      "Add bean sprouts and spring onions.",
      "Serve with crushed peanuts and lime wedges."
    ]
  },
  {
    slug: "ramen-with-fried-egg",
    title: "Ramen with Fried Egg",
    image: "https://images.unsplash.com/photo-1501200040150-4d65c94e8f21?w=900",
    summary: "Simple and satisfying ramen topped with a crispy fried egg.",
    description: "This easy ramen recipe transforms ordinary instant noodles into a satisfying meal with a rich broth, fresh vegetables and a perfectly fried egg. It is ideal for quick lunches.",
    cookingTime: "12 minutes",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["1 packet instant ramen", "500ml water", "1 egg", "Cooking oil", "1 spring onion", "1/2 carrot", "1 teaspoon soy sauce", "Black pepper"],
    instructions: [
      "Bring water to a boil.",
      "Add ramen noodles and seasoning.",
      "Cook for approximately 4 minutes.",
      "Add sliced carrots and soy sauce.",
      "Heat oil in a separate frying pan.",
      "Fry the egg until the edges are crispy.",
      "Transfer noodles and broth into a bowl.",
      "Place the fried egg on top.",
      "Garnish with spring onions and black pepper."
    ]
  },
  {
    slug: "coconut-curry-noodles",
    title: "Coconut Curry Noodles",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=900",
    summary: "Creamy coconut milk noodles with aromatic curry spices.",
    description: "Coconut curry noodles are a delicious fusion-style meal featuring coconut milk, curry paste and tender noodles. The coconut creates a creamy texture while the spices add warmth and flavour.",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["200g noodles", "1 cup coconut milk", "1 cup vegetable stock", "1 tablespoon curry paste", "1 carrot", "1/2 red pepper", "1 tablespoon soy sauce", "1 garlic clove", "Fresh coriander"],
    instructions: [
      "Cook noodles according to the packet instructions.",
      "Heat a little oil in a cooking pot.",
      "Add garlic and curry paste.",
      "Stir until fragrant.",
      "Pour in coconut milk and vegetable stock.",
      "Add soy sauce and chopped vegetables.",
      "Simmer until vegetables are tender.",
      "Add the cooked noodles.",
      "Mix until coated in the curry sauce.",
      "Garnish with fresh coriander and serve."
    ]
  },
  {
    slug: "chilli-garlic-noodles",
    title: "Chilli Garlic Noodles",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
    summary: "Bold and spicy noodles infused with garlic, chilli and savoury sauce.",
    description: "Chilli garlic noodles are perfect for spice lovers. They combine fresh garlic, chilli flakes and soy sauce to create a bold, flavourful dish that can be prepared in minutes.",
    cookingTime: "15 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["200g noodles", "4 garlic cloves", "1 tablespoon chilli flakes", "2 tablespoons soy sauce", "1 tablespoon sesame oil", "1 teaspoon brown sugar", "Spring onions", "Cooking oil", "Sesame seeds"],
    instructions: [
      "Cook noodles according to the packet instructions.",
      "Drain noodles and set aside.",
      "Finely chop the garlic.",
      "Heat cooking oil in a pan.",
      "Add garlic and chilli flakes.",
      "Stir gently until fragrant without burning the garlic.",
      "Add soy sauce, sesame oil and brown sugar.",
      "Add cooked noodles.",
      "Toss until the sauce coats all the noodles.",
      "Garnish with spring onions and sesame seeds."
    ]
  },
  {
    slug: "chicken-chow-mein",
    title: "Chicken Chow Mein",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    summary: "Chinese-inspired noodles with chicken and crunchy vegetables.",
    description: "Chicken Chow Mein is a popular Chinese-inspired stir-fried noodle dish featuring chicken, cabbage, carrots and a savoury sauce. It is a great homemade alternative to takeaway noodles.",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    servings: 2,
    ingredients: ["200g egg noodles", "200g chicken breast", "1 cup shredded cabbage", "1 carrot", "1 green pepper", "2 tablespoons soy sauce", "1 tablespoon oyster sauce", "2 garlic cloves", "Cooking oil"],
    instructions: [
      "Cook egg noodles according to the packet instructions.",
      "Drain and set aside.",
      "Cut chicken into thin strips.",
      "Heat oil in a wok or frying pan.",
      "Add chicken and cook until fully cooked.",
      "Add garlic, carrots, cabbage and green pepper.",
      "Stir-fry vegetables for a few minutes.",
      "Add soy sauce and oyster sauce.",
      "Add cooked noodles.",
      "Toss everything together and serve hot."
    ]
  },
  {
    slug: "peanut-satay-noodles",
    title: "Peanut Satay Noodles",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
    summary: "Creamy peanut butter noodles with a delicious sweet and savoury sauce.",
    description: "Peanut satay noodles are inspired by Southeast Asian flavours. The creamy peanut sauce combines peanut butter, soy sauce, lime and a touch of sweetness to create a rich coating for the noodles.",
    cookingTime: "15 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["200g noodles", "3 tablespoons peanut butter", "2 tablespoons soy sauce", "1 tablespoon lime juice", "1 teaspoon honey", "1/4 cup warm water", "1 carrot", "Spring onions", "1 teaspoon chilli sauce"],
    instructions: [
      "Cook noodles according to the packet instructions.",
      "Add peanut butter to a mixing bowl.",
      "Add soy sauce, lime juice and honey.",
      "Pour in warm water and mix until smooth.",
      "Add chilli sauce according to your preferred spice level.",
      "Drain the cooked noodles.",
      "Pour peanut sauce over the noodles.",
      "Mix until evenly coated.",
      "Add grated carrots and chopped spring onions.",
      "Serve immediately."
    ]
  },
  {
    slug: "vegetable-ramen-soup",
    title: "Vegetable Ramen Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900",
    summary: "A warming vegetable ramen soup packed with fresh vegetables and flavourful broth.",
    description: "Vegetable ramen soup is a comforting noodle dish made with savoury vegetable broth and a variety of fresh vegetables. It is a delicious meat-free meal that is easy to customise.",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["2 portions ramen noodles", "3 cups vegetable stock", "1 carrot", "1 cup mushrooms", "1 cup baby spinach", "1/2 cup cabbage", "2 garlic cloves", "1 tablespoon soy sauce", "Spring onions"],
    instructions: [
      "Heat vegetable stock in a cooking pot.",
      "Add chopped garlic and soy sauce.",
      "Slice carrots and mushrooms.",
      "Add carrots, mushrooms and cabbage to the broth.",
      "Allow vegetables to cook until tender.",
      "Prepare ramen noodles separately.",
      "Add baby spinach to the hot broth.",
      "Place noodles into serving bowls.",
      "Pour vegetable broth over the noodles.",
      "Garnish with spring onions and serve hot."
    ]
  },
  {
    slug: "sweet-and-sour-noodles",
    title: "Sweet and Sour Noodles",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
    summary: "Colourful noodles coated in a tangy sweet and sour sauce.",
    description: "Sweet and sour noodles are a colourful stir-fried dish featuring vegetables and a balanced sauce made from vinegar, soy sauce and sugar. The result is a delicious combination of tangy and sweet flavours.",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    servings: 2,
    ingredients: ["200g egg noodles", "1 red pepper", "1 green pepper", "1 carrot", "1/2 cup pineapple chunks", "2 tablespoons soy sauce", "2 tablespoons vinegar", "1 tablespoon tomato sauce", "1 tablespoon brown sugar", "Cooking oil"],
    instructions: [
      "Cook noodles according to the packet instructions.",
      "Drain and set aside.",
      "Mix soy sauce, vinegar, tomato sauce and brown sugar.",
      "Heat cooking oil in a frying pan.",
      "Add sliced carrots and peppers.",
      "Stir-fry until slightly tender.",
      "Add pineapple chunks.",
      "Pour sweet and sour sauce over the vegetables.",
      "Add cooked noodles.",
      "Toss everything together until coated.",
      "Serve warm."
    ]
  }
];

// Create database table
db.exec(`
  DROP TABLE IF EXISTS recipes;

  CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    image TEXT,
    summary TEXT,
    description TEXT,
    cooking_time TEXT,
    difficulty TEXT,
    servings INTEGER,
    ingredients TEXT,
    instructions TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

// Prepare insert statement
const insert = db.prepare(`
  INSERT INTO recipes
    (slug, title, image, summary, description, cooking_time, difficulty, servings, ingredients, instructions)
  VALUES
    (@slug, @title, @image, @summary, @description, @cookingTime, @difficulty, @servings, @ingredients, @instructions)
`);

// Insert all recipes
const insertAll = db.transaction((rows) => {
  for (const row of rows) {
    insert.run({
      ...row,
      ingredients: JSON.stringify(row.ingredients),
      instructions: JSON.stringify(row.instructions),
    });
  }
});

insertAll(dummyData);

console.log(
  "Database is Running Successfully!",
  dummyData.length,
  "recipes."
);

db.close();