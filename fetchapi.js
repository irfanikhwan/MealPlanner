function buttonClicked() {
    // Clear the existing content in the "mealList" div
    document.getElementById("mealList").innerHTML = "";

    var strCategory = document.getElementById("searchData").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.meals && data.meals.length > 0) {
                data.meals.forEach((meal) => {
                    // Display information for each meal
                    displayMealInfo(meal);
                });
            } else {
                console.log("No results found");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}


function displayMealInfo(meal) {
    var mealContainer = document.createElement("div");

    // Display relevant information for each meal
    mealContainer.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <p>Category: ${meal.strCategory}</p>
        <p>Area: ${meal.strArea}</p>
        <p>Instructions: ${meal.strInstructions}</p>
        <p>Watch: <a href="${meal.strYoutube}" target="_blank">Video Link</a></p>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100%; max-height: 200px;" />

        <!-- You can customize the display based on your needs -->

        <hr />`;

    // Append the meal container to a div in your HTML
    document.getElementById("mealList").appendChild(mealContainer);
}

function getRandomMeal() {
    // Clear the existing content in the "mealList" div
    document.getElementById("mealList").innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((data) => {
            if (data.meals && data.meals.length > 0) {
                // Display information for the random meal
                displayMealInfo(data.meals[0]);
            } else {
                console.log("No results found for random meal");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

