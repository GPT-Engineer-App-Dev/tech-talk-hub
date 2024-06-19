import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Flex, Heading, Input, FormControl, FormLabel, FormErrorMessage, VStack } from '@chakra-ui/react';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('User Data', values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Register</Heading>
        <Box w="100%">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field as={Input} id="username" name="username" />
                    <ErrorMessage name="username" component={FormErrorMessage} />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                    <ErrorMessage name="email" component={FormErrorMessage} />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field as={Input} id="password" name="password" type="password" />
                    <ErrorMessage name="password" component={FormErrorMessage} />
                  </FormControl>

                  <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
                    Register
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Container>
  );
};

export default Register;