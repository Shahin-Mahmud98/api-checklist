const loadSingleUser = user => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.result[0]))

}
loadSingleUser();

const displaySingleUser = user => {
    console.log(user)
}

// mealdb
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}

const loadMeals = searchText => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if (!meals) {

    }

    meals?.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${meal.strMeal}</h1>
            <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
            <button onclick = "loadMealDetail('${meal.strMeal}')"> click me </button>
        `;
        container.appendChild(div);
    });
}

loadMeals('fish')

const loadMealDetail = mealName => {
    console.log(mealName);
}