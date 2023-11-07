import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const AppGifs = () => {

  const [categories, setCategories] = useState(['Rick & Morty']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Fortnite']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>App de Gifs</h1>
      {/* ----------------------------------------------------------------------------------- */}
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* ----------------------------------------------------------------------------------- */}
      {/* Listado de Gifs */}
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
      {/* ----------------------------------------------------------------------------------- */}
      {/* Gif Item */}
    </>
  )
}

