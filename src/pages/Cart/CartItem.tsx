import { Td, Tr } from "@chakra-ui/react";

function CartItem({ name, price, size, quantity }: any) {
    return (<Tr>
        <Td>{name}</Td>
        <Td>{size} </Td>
        <Td isNumeric>{quantity}</Td>
        <Td isNumeric>{price} $</Td>
    </Tr>);
}

export default CartItem;