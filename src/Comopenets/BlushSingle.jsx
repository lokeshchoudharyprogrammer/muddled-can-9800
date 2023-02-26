import React from 'react';
import { NavLink } from 'react-router-dom';
import navarcss from '../Css/Navbar.module.css';
// import Carousel from '../Comopenets/Silder';
import { Footer } from './Footer';
import { ProductCau } from './ProductCau';
import { Productbuy2 } from './Productbuy2';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../Avatar/logos.png';


import {
  Spacer,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const BlushSingle = () => {
  const [count, setcount] = React.useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const [data, setdata] = React.useState([]);

  const Fetchdata = () => {
    return axios.get(`http://localhost:2000/blush/${id}`).then(res => {
      setdata(res.data);
    });
  };

  React.useEffect(() => {
    Fetchdata();
  }, []);
  console.log(data);
  return (
    <>
      <div
        style={{
          margin: 'auto',
          width: '90%',
          marginTop: '12px',
          display: 'flex',
          marginBottom: '23px',
        }}
      >
        <div w="100px" h="10">
          <NavLink to="/">
            <Image
              style={{ borderRadius: '14px', width: '99px', height: '66px' }}
              src={logo}
            />
          </NavLink>
        </div>
        <Spacer />
        <div w="380px" h="10">
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid black',
              display: 'flex',
            }}
          >
            <Input
              style={{
                border: 'none',
                borderRadius: 'inherit',
                width: '390px',
              }}
              placeholder="Search For A Product And Brand..."
            />
            <AiOutlineSearch style={{ width: 'auto', height: '18px' }} />
          </div>
        </div>

        <Spacer />
        <Box
          w="180px"
          h="10"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Flex
            title="Account"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '6px',
            }}
          >
            <AiOutlineUser style={{ width: 'auto', height: '18px' }} />
            Account
          </Flex>
        </Box>
        <Box w="180px" h="10" gap={2}>
          <Flex
            title="Cart"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
              marginTop: '6px',
            }}
          >
            <AiOutlineShopping style={{ width: 'auto', height: '29px' }} />
            Cart
          </Flex>
        </Box>
      </div>
      <Container key={data.id} maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Center>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={data.image_link}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '50%', sm: '400px', lg: '500px' }}
              />
            </Flex>
          </Center>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Center>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {data.name}
                </Heading>
              </Center>
              <Center>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  {data.price_sign}
                  {data.price}
                </Text>
              </Center>
              <Text>
                <b>About</b> : {data.description}...
              </Text>
            </Box>

            <Button
              onClick={onOpen}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Add to cart
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent mt="23px">
                <ModalHeader>{data.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={data.image_link}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={{ base: '50%', sm: '40%', lg: '50%' }}
                  />
                  <Text>Price : {data.price}</Text>
                </ModalBody>
                <Flex style={{ justifyContent: 'space-around' }}>
                  <Center>
                    <button
                      style={{ border: '2px solid black', padding: '12px' }}
                      disabled={count === 1}
                      onClick={() => setcount(count - 1)}
                    >
                      -
                    </button>
                    <Text>Total Price :{parseInt(data.price * count)}</Text>
                    <button
                      style={{ border: '2px solid black', padding: '12px' }}
                      onClick={() => setcount(count + 1)}
                    >
                      +
                    </button>
                  </Center>
                </Flex>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}
            >
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Footer />
      </Container>
    </>
  );
};
