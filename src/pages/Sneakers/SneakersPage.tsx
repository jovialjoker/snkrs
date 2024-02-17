import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import SneakersComponent from "./SneakersComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';
import { useDispatch } from "react-redux";

function SneakersPage() {
    const [sneakers, setSneakers] = useState<any>([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        setIsAuth(sessionStorage.getItem("isAuth") == "true")
    },[])

    useEffect(() => {
        const getSneakers = async () => {
            const q = query(collection(db, "sneakers"));
            const querySnapshot = await getDocs(q);
            let snks = [] as any[]
            querySnapshot.forEach((doc) => {
                snks.push(doc.data().value);
            });
            setSneakers(snks)
        }
        getSneakers()
    }, [])

    const handleAddToCart = (sneaker: any) => {
        const user = auth.currentUser;
        if (!user) {
            return;
        }

        const cartRef = doc(db, "cart" + user.uid, `${sneaker.id}`);

        getDoc(cartRef).then((cartDoc) => {
            if (cartDoc.exists()) {
                // If the document exists, update the counter
                const currentData = cartDoc.data();
                const currentQuantity = currentData.quantity || 0; // If no quantity exists, default to 0
                const updatedQuantity = currentQuantity + 1; // Increase the quantity by 1
                setDoc(cartRef, { ...currentData, quantity: updatedQuantity }, { merge: true });
            } else {
                // If the document does not exist, create it with quantity 1
                setDoc(cartRef, { ...sneaker, quantity: 1 });
            }
        }).catch((error) => {
            console.error("Error checking cart:", error);
        });
    }

    return (<Flex flexDir={"column"}>
        {isAuth && <Button><Link to="/sneakers/add">Add sneaker</Link></Button>}
        <SimpleGrid
            columns={3}
            spacingX={{
                base: 16,
                lg: 24,
            }}
            spacingY={20}
            mt={6}
        >
            {sneakers.map((snk: any) => <SneakersComponent isAuth={isAuth} handler={handleAddToCart} key={snk.id} id={snk.id} name={snk.name} size={snk.size} price={snk.price} description={snk.description}></SneakersComponent>)}
        </SimpleGrid>
    </Flex>);
}

export default SneakersPage;