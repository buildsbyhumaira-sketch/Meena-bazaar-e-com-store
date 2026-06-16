/* eslint-disable array-callback-return */
export const initialState = {
    basket: [],
    user: null,
};

let array = [];

export const basketTotal = (basket) =>
    basket?.reduce((a, item) => item.price + a, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const i = state.basket.findIndex((item) => action.id === item.id);
            if (i >= 0) {
                array.pop(i.id);
                newBasket.splice(i, 1);
            } else {
                console.warn(`can't remove (id: ${action.id}) as its not in basket`);
            }
            return { ...state, basket: newBasket };
        case "MODIFY_THE_BASKET":
            let newBasket2 = [...state.basket];
            const index = state.basket.findIndex((item) => action.id === item.id);
            if (index !== null && index !== undefined) {
                newBasket2.map((product) => {
                    if (product.id === action.id && !(array.includes(action.id))) {
                        product.title += ` x${action.num}`;
                        product.price = parseFloat(product.price) * parseInt(action.num);
                        array.push(product.id);
                    }
                    else if (array.includes(product.id)) {
                        let ref = document.querySelector(".alert");
                        if (ref) {
                            ref.classList.add("show");
                            window.addEventListener("keydown", (e) => {
                                if (e.keyCode === 27) {
                                    ref.classList.remove("show");
                                }
                            });
                            document
                                .querySelector(".alert span")
                                .addEventListener("click", () => {
                                    ref.classList.remove("show");
                                });
                        }

                    }

                });

            }
            return { ...state, basket: newBasket2 };
        default:
            return state;
    }
};

export default reducer;
