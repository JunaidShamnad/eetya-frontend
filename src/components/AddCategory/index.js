import React, { useEffect, useState } from "react";
import Axios from "../../axios";
import Swal from 'sweetalert2'
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
  DeleteIcon,
  EditIcon
} from "./AddCategory.elements";

const AddCategory = () => {
  useEffect(() => {
    Axios.get("/category").then((res) => {
      setcategory(res.data);
    });
  }, []);

  const [category, setcategory] = useState([]);
  const [newCategory, setnewCategory] = useState("");

  const createCategory = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "/admin/create-category",
      data: { categoryName: newCategory },
    }).then((response) => {
      if (response.data.status) {
        window.location.reload(false);
      }
    });
  };

  const deleteCategory = (id, name) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      html: `Category: <b>${name}</b> will be permanetly deleted!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        Axios({
          url:'/admin/delete-category',
          data:{id:id},
          method:'post'
        }).then((res)=>{
          if(res.data.status){
            Swal.fire(
              'Deleted!',
              `Category: ${name} deleted successfully`,
              'success'
            )
            window.location.reload(false)
          }
        })
        
      }
    })
  };

  const editCategory=async(id, name)=>{


const { value: editedCategory } = await Swal.fire({
  title: 'Edit Category',
  input: 'text',
  inputLabel: '',
  inputValue: name,
  showCancelButton: true,
  confirmButtonText:'Save Now',
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
    if(value == name){
      return 'Nothing changed!'
    }
  }
})

if (editedCategory) {
  Axios({
    url:'/admin/edit-category',
    method:'post',
    data:{id:id, categoryName:editedCategory}
  }).then(async(res)=>{
    if(res.data.status){
      await Swal.fire(`${name} edited to ${editedCategory}`)
      window.location.reload(false)
    }
  })
  
}
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
                onChange={(e) => setnewCategory(e.target.value)}
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
                    <TableTd>{index + 1}</TableTd>

                    <TableTd>{c.categoryName}</TableTd>
                    <TableTd> <EditIcon onClick={()=>{
                      editCategory(c._id, c.categoryName)
                    }}/> </TableTd>
                    <TableTd>
                      <DeleteIcon onClick={() => {
                        deleteCategory(c._id, c.categoryName)
                      }} /> 
                    </TableTd>
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
