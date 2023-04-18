import { Add_To_Cart } from "./Constant";
function addTOCart(item) {
    return {
        type: Add_To_Cart,
        data: item
    }
}
export default addTOCart;