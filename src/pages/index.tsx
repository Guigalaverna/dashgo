import {
  Button,
  Flex, Stack
} from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { Input } from "../components/Form/Input";


interface SignInData {
  email: string
  password: string
}

const signInSchema = yup.object().shape({
  email: yup.string().email().required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema)
  })
  
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInData> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(value)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        onSubmit={handleSubmit(handleSignIn)}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input 
            name='email' 
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name='password' 
            label='Senha' 
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button type="submit" mt={6} colorScheme="purple" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
