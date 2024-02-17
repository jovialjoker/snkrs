import React, { useState, useEffect } from "react";
import {
    Flex,
    HStack,
    Button,
    Heading,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Text,
    Link,
    Grid,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { removeInfo } from "../store/reducers/accountActions";

const Links = [
    { text: "Home", path: "/" },
    { text: "Sneakers", path: "/sneakers" },
];

const NavLink = ({ children, path }: any) => {
    return (
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
            }}
            href={path}
        >
            {children}
        </Link>
    );
};

export default function Header() {
    const dispatcher = useDispatch<any>();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const accountState = useSelector((state: any) => state.account)

    const logoutHandler = () => {
        signOut(auth).then(() => {
            navigate('/login')
        })
        dispatcher(removeInfo());
    };

    useEffect(() => {
        let isAuth = sessionStorage.getItem("isAuth")
        if (isAuth) {
            setIsLoggedIn(true);
            setUsername(sessionStorage.getItem("name")!)
        }
        else {
            setIsLoggedIn(false)
        }
    }, [accountState])

    return (
        <Grid
            gridTemplateColumns={"repeat(12, 1fr);"}
            px={{ md: 8, base: 2 }}
            py={4}
            bg={"orange"}
        >
            <GridItem colSpan={8}>
                <HStack
                    spacing={8}
                    alignItems={"center"}
                    justifyContent={"start"}
                >
                    <Heading size={""} _hover={{ textDecoration: "none" }}>SNKRS</Heading>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                        justifyItems="center"
                    >
                        {Links.map((link) => (
                            <NavLink key={link.text} path={link.path}>
                                {link.text}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
            </GridItem>

            <GridItem colSpan={4}>
                <Flex alignItems={"center"} justifyContent={"end"} flexBasis="30%">
                    {isLoggedIn ? (
                        <>
                            <Text>Hello, </Text>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <p>{username}</p>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Link
                                            px={2}
                                            py={1}
                                            rounded={"md"}
                                            _hover={{
                                                textDecoration: "none",
                                            }}
                                            href={`/my-profile`}
                                        >
                                            My profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            px={2}
                                            py={1}
                                            rounded={"md"}
                                            _hover={{
                                                textDecoration: "none",
                                            }}
                                            href={`/my-cart`}
                                        >
                                            My cart
                                        </Link>
                                    </MenuItem>

                                    <MenuDivider />
                                    <MenuItem onClick={logoutHandler}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </>
                    ) : (
                        <HStack spacing={3}>
                            <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button
                                display={{ base: "none", md: "inline-flex" }}
                                fontSize={"sm"}
                                fontWeight={600}
                            // colorScheme={colors.primaryScheme}
                            >
                                <Link
                                    href="/register"
                                    _hover={{
                                        textDecoration: "none",
                                    }}
                                >
                                    Register
                                </Link>
                            </Button>
                        </HStack>
                    )}
                </Flex>
            </GridItem>
        </Grid>
    );
}