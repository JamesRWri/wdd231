fetch("recipes.json")
  .then(response => response.json())
  .then(data => {
    console.log("Recipes loaded:", data);
    console.log("First recipe name:", data[0].recipe_name);
  })
  .catch(error => console.error("Error loading recipes:", error));
