import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "@/features/public/pages/HomePage";
import AllRecipes from "@/features/recipes/pages/AllRecipes";
import MyRecipes from "@/features/recipes/pages/MyRecipes";
import AddRecipes from "@/features/recipes/pages/AddRecipes";
import RecipeDetails from "@/features/recipes/pages/RecipeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'recipeDetails',
                Component: RecipeDetails
            },
            {
                path: '/allRecipes',
                Component: AllRecipes
            },
            {
                path: '/MyRecipes',
                Component: MyRecipes
            },
            {
                path: '/AddRecipes',
                Component: AddRecipes
            },
        ]
    },
])
