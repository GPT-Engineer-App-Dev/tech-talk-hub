import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Flex, Heading, Input, FormControl, FormLabel, FormErrorMessage, VStack, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    content: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(values);
      localStorage.setItem('posts', JSON.stringify(posts));
      setSubmitting(false);
      navigate('/');
    }, 400);
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Create Post</Heading>
        <Box w="100%">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Field as={Input} id="title" name="title" />
                    <ErrorMessage name="title" component={FormErrorMessage} />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="content">Content</FormLabel>
                    <Field as={Textarea} id="content" name="content" />
                    <ErrorMessage name="content" component={FormErrorMessage} />
                  </FormControl>

                  <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
                    Create Post
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

export default CreatePost;