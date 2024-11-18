'use client'; // Make sure this is the first line in the file

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
    setSelectedMeal(null); // Reset selected meal when ingredient changes
    setMealDetails(null); // Clear previous meal details
  };

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const fetchMealDetails = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  };

  const handleMealClick = async (meal) => {
    setSelectedMeal(meal);
    const details = await fetchMealDetails(meal.idMeal);
    setMealDetails(details);
  };

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      {mealDetails ? (
        <div
          style={{
            padding: '10px',
            backgroundColor: '#f7931e',
            color: '#fff',
            borderRadius: '10px',
          }}
        >
          <h3>{mealDetails.strMeal}</h3>
          <img
            src={mealDetails.strMealThumb}
            alt={mealDetails.strMeal}
            style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
          />
          <h4>Ingredients:</h4>
          <ul>
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = mealDetails[`strIngredient${index + 1}`];
              const measure = mealDetails[`strMeasure${index + 1}`];
              return (
                ingredient && (
                  <li key={index}>
                    {ingredient} - {measure}
                  </li>
                )
              );
            })}
          </ul>
          <h4>Instructions:</h4>
          <p>{mealDetails.strInstructions}</p>
          <button
            onClick={() => {
              setSelectedMeal(null);
              setMealDetails(null);
            }}
            style={{
              padding: '10px',
              marginTop: '10px',
              backgroundColor: '#252946',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to Meal Ideas
          </button>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              onClick={() => handleMealClick(meal)}
              style={{
                padding: '10px',
                backgroundColor: '#252946',
                color: '#fff',
                marginBottom: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#343a59')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#252946')}
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
