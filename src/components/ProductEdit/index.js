import React, { useState } from "react";
import Axios from "axios";
import { ProductShowcase } from "../../data/Products";
import {
  LeftDiv,
  MainDiv,
  Row,
  BuyButton,
  ButtonDiv,
  MainImageConatiner,
  SubImageConatiner,
  SubImageDiv,
  MainImageDiv,
} from "../ProductDetails/ProductDetails.elements";
import { Form, FormInput, Formlabel } from "../SignUp/SignUp.elements";
import {
  RightDiv,
  FadeText,
  DeleteIcon,
  Maintitle,
} from "./ProductEdit.elements";

const ProductEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const editProducts = () => {
    Axios({
      method: "PUT",
      data: {
        title: title,
        description: description,
        category: category,
        price: price,
      },
      withCredentials: true,
      url: "http://localhost:4000/items/:id",
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <MainDiv>
        <FadeText>Add Product</FadeText>
        <Row>
          <LeftDiv>
            {ProductShowcase.map((item, index) => {
              return (
                <>
                  <Maintitle>Image Preview</Maintitle>
                  <MainImageDiv>
                    <MainImageConatiner src={item.image} key={index} />
                  </MainImageDiv>
                  <SubImageDiv>
                    <SubImageConatiner src={item.image} />
                    <SubImageConatiner src={item.image} />
                    <SubImageConatiner src={item.image} />
                  </SubImageDiv>
                </>
              );
            })}
          </LeftDiv>

          <RightDiv>
            <Form action="#">
              <DeleteIcon />
              <Formlabel>Product Name</Formlabel>
              <FormInput
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
              />

              <Formlabel>Product Details</Formlabel>
              <FormInput
                onChange={(e) => setDescription(e.target.value)}
                required
                type="text"
              />

              <Formlabel>Product Category</Formlabel>
              <FormInput
                onChange={(e) => setCategory(e.target.value)}
                required
                type="text"
              />

              <Formlabel>Product Price</Formlabel>
              <FormInput
                onChange={(e) => setPrice(e.target.value)}
                required
                type="text"
              />

              <Formlabel>Upload Image </Formlabel>
              <FormInput type="file" />
              <ButtonDiv>
                <BuyButton type="submit" onClick={editProducts}>Update</BuyButton>

              </ButtonDiv>
            </Form>
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  );
};

export default ProductEdit;
