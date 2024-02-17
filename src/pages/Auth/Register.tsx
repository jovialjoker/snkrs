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
} from '@chakra-ui/react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { saveCredentials } from '../../store/reducers/accountActions';

function RegisterPage() {
    const dispatch = useDispatch<any>();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser!, {
                    displayName: name,
                    photoURL: "basic",
                });
                navigate("/login")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error("Registration error:", errorMessage);
            });
        navigate("/login")
    }

    return <>
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Create a new account</Heading>
                        <Text color="fg.muted">
                            Already have an account? <Link href="/login">Sign in</Link>
                        </Text>
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
                                <Input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
                            </FormControl>
                        </Stack>
                        <Stack spacing="6">
                            <Button onClick={handleRegister}>Sign in</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    </>;
}

export default RegisterPage;