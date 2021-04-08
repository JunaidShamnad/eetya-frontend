import React, { useEffect, useState } from "react";
import Axios from "../../axios";
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
import { TableDiv, Boxtitle } from "../Admin/Admin.elements";
import {
  TableContainer,
  TableTag,
  TableTd,
  TableTh,
  TableTr,
} from "./AddCategory.elements";

const AddCategory = () => {
  

  useEffect(() => {
    Axios.get("/category").then((res) => {
      setcategory(res.data);
    });
  }, []);

  const [category, setcategory] = useState([]);
  const [newCategory, setnewCategory] = useState('');

  const createCategory = (e)=>{
    e.preventDefault()
    Axios({
      method:'post',
      url:'/admin/create-category',
      data:{categoryName:newCategory}
    })
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={createCategory}>
              <FormH1>Add Category</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                type="text"
                onChange={(e)=>setnewCategory(e.target.value)}
                placeholder="Add a new category"
                required
              />

              <FormButton type="submit">Add</FormButton>
              {/* <SigninText to="/contact-us">Facing any issues , Contact Us </SigninText> */}
            </Form>
          </FormContent>
        </FormWrap>

        <TableDiv>
          <Boxtitle>All Categories</Boxtitle>
          <TableContainer>
            <TableTag>
              {category.map((c, index) => {
                return (
                  <TableTr>
                    <TableTh>{index+1}</TableTh>

                    <TableTd>{c.categoryName}</TableTd>
                  </TableTr>
                );
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>
      </Container>
    </>
  );
};

export default AddCategory;
