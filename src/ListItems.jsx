import {useState} from "react";

const ListItems = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
    const addItem =()=>{
        setItems([...items, "Yaanyo"]);
    }

    return (
        <ul>
            {
                items.map(item=>(
                   <th>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                    <tr>{item}</tr>
                   </th>
                  
                ))
            }
            <button onClick={addItem}>Add Item</button>
        </ul>
    )
}

export default ListItems;