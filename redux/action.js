import { Add_To_Cart } from "./Constant";
import { Remove_From_Cart } from "./Constant";
export const addTOCart = (item) => {
    return {
        type: Add_To_Cart,
        data: item
    }
}
export const removeFromCart = (item) => {
    return {
        type: Remove_From_Cart,
        data: item
    }
}