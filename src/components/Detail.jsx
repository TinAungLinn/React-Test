import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();

  const [meals, setMeals] = useState({});
  const [items, setItems] = useState();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await data.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };

  // useEffect(() => {
  //   const newItem = [{ingredient1:meals.strIngredient1 === "" ? "lee" : meals.strIngredient1}];
  //   // setItems(newItem);
  //   console.log(newItem);
  // },[])

  return (
    <div className=" flex mx-auto w-[80%] my-10 gap-12">
      <img
        className=" h-[500px] object-cover rounded"
        src={meals.strMealThumb}
        alt=""
      />
      <div className="">
        <h2 className=" text-3xl text-gray-500 font-bold tracking-wide mb-5">
          {meals.strMeal}
        </h2>
        <h2 className=" text-lg text-gray-500 font-bold tracking-wide mb-5">
          {meals.strArea}
        </h2>
        <h2 className=" text-lg text-gray-500 font-bold tracking-wide mb-5">
          {meals.strCategory}
        </h2>
        <p className=" text-gray-500 leading-8 tracking-wide mb-3">
          {meals.strInstructions}
        </p>
        <a href={meals.strYoutube}>
          <BsYoutube className=" text-3xl text-red-500"/>
        </a>
      </div>
    </div>
  );
};

export default Detail;
