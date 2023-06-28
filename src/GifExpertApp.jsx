import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories,setCategories] = useState(["Sailor Moon"]);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory)

        if( categories.includes(newCategory)) return

        setCategories([...categories,newCategory])
        //setCategories(cat => [...cat,'Harry Potter'])
    }

   // console.log(categories)
    return (
        <>
        {/* Titulo */}
            <h1>GifExpertApp</h1>
        {/* Input */}
            <AddCategory 
            onNewCategory = { (value) => onAddCategory(value)}
            // setCategories={setCategories}
            />
        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        <ol>
            {categories.map( (category) => (
                <GifGrid key={category} category={category}/>
                ))
            }
        </ol>
        </>
    )
}