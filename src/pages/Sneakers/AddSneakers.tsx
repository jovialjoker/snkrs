import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react'
import { useState } from 'react';
import { auth, db, storage } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getNoOfSneakers } from './sneakersUtils';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes } from 'firebase/storage';

const sneakerState = {
    id: 0,
    name: " ",
    description: "",
    price: 0,
    size: 0,
    image: null as File | null,
};


function AddSneakers() {
    const [sneaker, setSneaker] = useState(sneakerState);
    const navigate = useNavigate()
    const handleAdd = async (e: any) => {
        e.preventDefault()
        const user = auth.currentUser;
        if (!user) {
            return;
        }
        let no = await getNoOfSneakers()

        setDoc(doc(db, "sneakers", `${no + 1}`), {
            value: {...sneaker, id: no + 1, image: sneaker.image?.name},
        });
        
        if (sneaker.image) {
            const imageRef = ref(storage, `images/${no+1}`);
        
            uploadBytes(imageRef, sneaker.image).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        } else {
            console.log('No image to upload');
        }
        
        navigate('/sneakers')
    }

    return (<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Add a new sneaker</Heading>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input value={sneaker.name} onChange={(e) => setSneaker({ ...sneaker, name: e.target.value })} id="name" type="string" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Textarea value={sneaker.description} onChange={(e) => setSneaker({ ...sneaker, description: e.target.value })} id="description" rows={3} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="size">Size</FormLabel>
                            <Input value={sneaker.size} onChange={(e) => setSneaker({ ...sneaker, size: parseFloat(e.target.value) })} id="size" type="number" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="price">Price</FormLabel>
                            <Input value={sneaker.price} onChange={(e) => setSneaker({ ...sneaker, price: parseFloat(e.target.value) })} id="price" type="number" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="photo">Photo</FormLabel>
                            <Input onChange={(e) => {
                                setSneaker({ ...sneaker, image: e.target.files![0] });
                            }}
                                placeholder="description"
                                _placeholder={{ color: "gray.500" }}
                                type="file"
                                accept="image/*" />
                            {sneaker.image && (
                                <img src={URL.createObjectURL(sneaker.image)} alt="Sneaker" />
                            )}
                        </FormControl>
                    </Stack>
                    <Stack spacing="6">
                        <Button onClick={handleAdd}>Add</Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>);
}

export default AddSneakers;