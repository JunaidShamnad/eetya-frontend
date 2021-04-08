import React, { useState } from "react";
import Axios from '../../axios';
import FileBase from "react-file-base64";
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
import {
  FormSelectDiv,
  FormSelect,
  FormSelectOption,
} from "../AddProducts/AddProducts.elements";
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
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState();
  const [maxQuantity, setMaxQuantity] = useState(" ");
  const [minQuantity, setMinQuantity] = useState(" ");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });

  const editProducts = () => {
    Axios({
      method: "PUT",
      data: {
        title: title,
        description: description,
        category: categoryValue,
        minQuantity: minQuantity,
        maxQuantity: maxQuantity,

        price: price,
      },
      withCredentials: true,
      url: "/items/:id",
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

<FormSelectDiv>
  <FormSelect
    onChange={(e) => setCategoryValue(e.target.value)}
    required
  >
    {category.map((category, index) => {
      return (
        <FormSelectOption
          key={index}
          value={category.categoryName}
        >
          {category.categoryName}
        </FormSelectOption>
      );
    })}
  </FormSelect>

</FormSelectDiv>

   


<Formlabel>Product Price (Price of 1 Product)</Formlabel>
<FormInput
  onChange={(e) => setPrice(e.target.value)}
  required
  type="text"
/>
<Formlabel>Max Quantity</Formlabel>
<FormInput
  onChange={(e) => setMaxQuantity(e.target.value)}
  required
  type="text"
/>
<Formlabel>Min Quantity</Formlabel>
<FormInput
  onChange={(e) => setMinQuantity(e.target.value)}
  required
  type="text"
/>

<Formlabel htmlFor="file">Upload Image </Formlabel>
<FileBase
  className="fileUpload"
  type="file"
  multiple={true}
  // onDone={({ base64 }) => setFile(base64)}

  onDone={async(Files)=>{
    console.log("len:"+Files.length)
    let arry=[]
    await Files.map((img,index)=>{
      let data ={
        Image:img.base64,
        type:img.file.type
      };
      arry.push(data);
      // setFile( 
      //   file.concat(data)
      // );
      
     
      })
      setFile(arry);
    
  }}
/>
              <ButtonDiv>
                <BuyButton type="submit"  onClick={editProducts}>Update</BuyButton>
              
              </ButtonDiv>
            </Form>
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  );
};

export default ProductEdit;
