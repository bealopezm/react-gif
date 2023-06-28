import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        //console.log(event.target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) =>  {
        event.preventDefault();
        //console.log(input.value);
        if( inputValue.trim().length <= 1) return;
        // setCategories(categories => [...categories,inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue} 
            onChange={ onInputChange }
            // onChange={(event) => onInputChange(event) }
        />
    </form>
  )
}
