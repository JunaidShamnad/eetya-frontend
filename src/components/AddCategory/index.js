import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  Formlabel,
  FormWrap,
  SigninText,
} from "../../components/SignIn/SignIn.elements";


const AddCategory = () => {
 

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Add Category</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                type="text"
                placeholder="Add a new category"
                required
              />
             
              <FormButton type="submit">
                Add Category
              </FormButton>
              {/* <SigninText to="/contact-us">Facing any issues , Contact Us </SigninText> */}
            </Form>
          </FormContent>
        </FormWrap>

        <TableDiv>
           <Boxtitle>All Categories</Boxtitle>
    <TableContainer>
    <TableTag>
        <TableTr>
            <TableTh>User Name</TableTh>
            <TableTh>Email</TableTh>
            <TableTh>Cart</TableTh>
   
        </TableTr>
        <TableTr>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
        </TableTr>
    </TableTag>
 </TableContainer>
 </TableDiv>

      </Container>
   
    </>
  );
};

export default AddCategory;
