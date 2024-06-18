import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getPokemons = useCallback(async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);

  if (!pokemons.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return (
          <Box key={index} marginBottom={4} bgColor="pink.100">
            {pokemon.name}
          </Box>
        );
      })}

      <>
        <Button colorScheme="red" onClick={onOpen}>
          Open dialog
        </Button>

        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Título da dialog
              </AlertDialogHeader>
              <AlertDialogBody>Descrição da dialog</AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </div>
  );
};

export default List;
