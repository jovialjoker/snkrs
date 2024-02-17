import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

export const getNoOfSneakers = async () => {
    const q = query(collection(db, "sneakers"));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length
}