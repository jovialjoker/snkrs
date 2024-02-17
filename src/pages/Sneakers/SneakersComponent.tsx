import { Box, Flex, chakra, Image } from "@chakra-ui/react";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useRef } from "react";
import { storage } from "../../firebase";

function SneakersComponent({
    name,
    description,
    price,
    size, id, handler, isAuth }: any) {
    const imgRef = useRef<any>(null)
    const clickHandler = () => {
        handler({
            id,
            name,
            price,
            size,
            description
        })
    }

    useEffect(() => {
        const imageRef = ref(storage, `images/${id}`);
        getDownloadURL(imageRef)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                if(imgRef.current){
                    imgRef.current.setAttribute('src', url);
                }
            })
            .catch((error) => {
                // Handle any errors
            });
    }, [])

    

    return (<Flex
        _dark={{
            bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
    >
        <Box
            maxW="xs"
            mx="auto"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <chakra.h1
                    color="gray.800"
                    _dark={{
                        color: "white",
                    }}
                    fontWeight="bold"
                    fontSize="3xl"
                    textTransform="uppercase"
                >
                    {name}
                </chakra.h1>
                <chakra.p
                    mt={1}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    {description}
                </chakra.p>
                <chakra.b
                    mt={1}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    Size: {size}
                </chakra.b>
            </Box>

            <Image
                ref={imgRef}
                h={48}
                w="full"
                fit="cover"
                mt={2}
                src={`gs://snkrs-b5031.appspot.com/images/${id}`}
                alt="NIKE AIR"
            />

            <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
            >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    ${price}
                </chakra.h1>
                {isAuth && <chakra.button
                    px={2}
                    py={1}
                    bg="white"
                    fontSize="xs"
                    color="gray.900"
                    fontWeight="bold"
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                        bg: "gray.200",
                    }}
                    _focus={{
                        bg: "gray.400",
                    }}
                    onClick={clickHandler}
                >
                    Add to cart
                </chakra.button>}
            </Flex>
        </Box>
    </Flex>);
}

export default SneakersComponent;