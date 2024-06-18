import { Button, Flex, Input, Select, Textarea } from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const USERS = [
  {
    name: "Claudia",
    id: 1,
  },
  {
    name: "João",
    id: 2,
  },
  {
    name: "Bruno",
    id: 3,
  },
];

const CreatePost = () => {
  const [titleInput, setTitleInput] = useState();
  const [bodyInput, setBodyInput] = useState();
  const [userInput, setUserInput] = useState();

  const onChangeTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  const onChangeBodyInput = (event) => {
    setBodyInput(event.target.value);
  };

  const onChangeUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // dontpad.com/front3tads
  const createPost = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: titleInput,
        body: bodyInput,
        userId: userInput,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header title="Cadastro de Posts" />
      <Flex
        direction="column"
        gap={8}
        padding={8}
        justifyContent="center"
        alignItems="center"
      >
        <Input
          placeholder="Digite o título do post"
          value={titleInput}
          onChange={onChangeTitleInput}
          width={600}
        />
        <Textarea
          placeholder="Digite o conteúdo do post"
          value={bodyInput}
          onChange={onChangeBodyInput}
          width={600}
        />
        <Select
          placeholder="Selecione o usuário"
          onChange={onChangeUserInput}
          value={userInput}
          width={600}
          size="lg"
        >
          {USERS.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
        <Button colorScheme="orange" onClick={createPost}>
          + Criar post
        </Button>
      </Flex>
    </div>
  );
};

export default CreatePost;
