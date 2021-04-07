import React, { useState, useRef,useEffect } from "react";
import FileBase from "react-file-base64";
import Axios from "../../axios";
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
} from "../ProductEdit/ProductEdit.elements";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState('')
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [selectedCategory,setSelectCatgory] = useState("")
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element

  let categories = [];
  React.useEffect(() => {
    Axios.get("/category").then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);

  const addProducts = (e) => {
    console.log(category);
    console.log(file)
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        title: title,
        description: description,
        category: selectedCategory,
        price: price,
        image: file,
      },
      withCredentials: true,
      url: "/dealer/add-item",
    }).then((res) => {
      if (res.data.loginErr) alert("Login failed");
      else if (res.data.err) alert(res.data.err);
      else {
        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("");
        setFile("");
        alert("product added successfully");
      }
      window.location.reload();
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
             
         
              <select onChange={(e)=> setSelectCatgory(e.target.value)}  required>
                {category.map((category,index) => {
                  return (
                    <option key={index}
                     value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  );
                })}
                 
              </select>

              <Formlabel>Product Price</Formlabel>
              <FormInput
                onChange={(e) => setPrice(e.target.value)}
                required
                type="text"
              />

              <Formlabel htmlFor="file">Upload Image </Formlabel>
              <FileBase
                type="file"
                multiple={true}
                // onDone={({ base64 }) => setFile(base64)}
                onDone={(file)=>{setFile(file)}}
              />
              {/* displaying received image*/}
              {data.path && <img src={data.path} alt={data.name} />}
              <ButtonDiv>
                <BuyButton type="submit" onClick={addProducts}>
                  Add Product
                </BuyButton>
              </ButtonDiv>
            </Form>
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  );
};

export default AddProduct;
