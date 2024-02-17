import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../firebase";
import { Flex, Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import CartItem from "./CartItem";

function MyCart() {
    const [sneakers, setSneakers] = useState<any>([])

    useEffect(() => {
        const getSneakers = async () => {
            const id = sessionStorage.getItem("id")
            const q = query(collection(db, "cart" + id));
            const querySnapshot = await getDocs(q);
            let snks = [] as any[]
            querySnapshot.forEach((doc) => {
                snks.push(doc.data());
            });
            setSneakers(snks)
            debugger
        }
        getSneakers()
    }, [])

    return (<>
        <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading>My cart</Heading>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th isNumeric>Size</Th>
                            <Th isNumeric>Quantity</Th>
                            <Th isNumeric>Price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {sneakers.map((snk: any) => <CartItem name={snk.name} price={snk.price} size={snk.size} quantity={snk.quantity}/>)}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Total</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th isNumeric>{sneakers.reduce((accumulator: number, item: any) => accumulator + (item.price * item.quantity), 0)} $</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <></>
        </Flex>

    </>);
}

export default MyCart;