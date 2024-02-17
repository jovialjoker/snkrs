import { Box, Flex, Icon, Stack, chakra } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Feature = (props: any) => {
    return (
        <Flex>
            <Flex shrink={0}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    h={12}
                    w={12}
                    rounded="md"
                    _light={{
                        bg: "brand.500",
                    }}
                    color="white"
                >
                    <Icon
                        boxSize={6}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {props.icon}
                    </Icon>
                </Flex>
            </Flex>
            <Box ml={4}>
                <chakra.dt
                    fontSize="lg"
                    fontWeight="medium"
                    lineHeight="6"
                    _light={{
                        color: "gray.900",
                    }}
                >
                    {props.title}
                </chakra.dt>
                <chakra.dd
                    mt={2}
                    color="gray.500"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    {props.children}
                </chakra.dd>
            </Box>
        </Flex>
    );
};
function MainPage() {
    const accountState = useSelector((state: any) => state.account);
    useEffect(() => {
        if (accountState.isAuth) {
            debugger
        }
    }, [accountState])
    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                py={12}
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                rounded="xl"
            >
                <Box
                    maxW="7xl"
                    mx="auto"
                    px={{
                        base: 4,
                        lg: 8,
                    }}
                >
                    <Box
                        textAlign={{
                            lg: "center",
                        }}
                    >
                        <chakra.h2
                            _light={{
                                color: "brand.600",
                            }}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            SNKRS
                        </chakra.h2>
                        <chakra.p
                            mt={2}
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                            }}
                            lineHeight="8"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            _light={{
                                color: "gray.900",
                            }}
                        >

                            Welcome to SNKRS: Your Ultimate Sneakers Destination!
                        </chakra.p>
                        <chakra.p
                            mt={4}
                            maxW="2xl"
                            fontSize="xl"
                            mx={{
                                lg: "auto",
                            }}
                            color="gray.500"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            At SneakPeak, we redefine your sneaker shopping experience, offering a curated selection of the latest and most sought-after sneakers from top brands worldwide. Step into the world of style, comfort, and innovation as you explore our vast collection of footwear designed to elevate your every stride.
                        </chakra.p>
                    </Box>

                    <Box mt={10}>
                        <Stack
                            spacing={{
                                base: 10,
                                md: 0,
                            }}
                            display={{
                                md: "grid",
                            }}
                            gridTemplateColumns={{
                                md: "repeat(2,1fr)",
                            }}
                            gridColumnGap={{
                                md: 8,
                            }}
                            gridRowGap={{
                                md: 10,
                            }}
                        >
                            <Feature
                                title="Discover Iconic Brands"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                From the timeless classics to the cutting-edge designs, we bring you an extensive array of sneakers from renowned brands like Nike, Adidas, Puma, Jordan, New Balance, and more. Whether you're a casual enthusiast or a dedicated collector, find your perfect pair that reflects your unique taste and personality.
                            </Feature>

                            <Feature
                                title="Unmatched Variety"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                    />
                                }
                            >
                                At SneakPeak, diversity is our strength. Explore a diverse range of styles, colors, and sizes to suit every preference and occasion. From retro-inspired models to futuristic silhouettes, our collection caters to all ages, genders, and lifestyles, ensuring that everyone finds their ideal fit.
                            </Feature>

                            <Feature
                                title="Quality Guaranteed"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                }
                            >
                                We understand the importance of quality craftsmanship. That's why each sneaker featured in our collection undergoes rigorous quality checks to ensure durability, comfort, and performance. Shop with confidence knowing that you're investing in footwear that stands the test of time.
                            </Feature>

                            <Feature
                                title="Stay Ahead of Trends"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                }
                            >
                                Stay ahead of the curve with our up-to-the-minute sneaker releases and trend forecasts. Whether it's the latest collaborations, limited editions, or exclusive drops, SneakPeak keeps you informed and connected to the pulse of sneaker culture.
                            </Feature>

                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}

export default MainPage;