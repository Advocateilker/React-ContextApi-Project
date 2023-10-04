import { createContext, useState } from "react";


export const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {

        const found = basket.find((i) => i.id === product.id);

        if (found) {

            const updated = { ...found, amount: found.amount + 1 }

            const newBasket = basket.map((i) => i.id === updated.id ? updated : i)

            setBasket(newBasket)
        } else {

            setBasket(basket.concat({ ...product, amount: 1 }))
        }


    };

    const removeFromBasket = (deleteID) => {

        const found = basket.find((i) => i.id === deleteID);

        if (found.amount > 1) {
            const updated = { ...found, amount: found.amount - 1 }
            const newBasket = basket.map((i) => i.id === updated.id ? updated : i)

            setBasket(newBasket)
        } else {
            const filtered = basket.filter((i) => i.id !== deleteID)
            setBasket(filtered)
        }



    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    )

}

