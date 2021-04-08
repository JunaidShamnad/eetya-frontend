import React, { useState, useRef,useEffect } from "react";
import FileBase from "react-file-base64";
import Axios from "../../axios";
import { ProductShowcase } from "../../data/Products";
import {
  FormSelectDiv,
  FormSelect,
  FormSelectOption,
} from "./AddProducts.elements";
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
import {useHistory} from "react-router-dom"

const AddProduct = () => {
  useEffect(() => {
    Axios.get("/category").then((res) => {
      console.log(res.data);
      setCategory(res.data);
      setCategoryValue(res.data[0].categoryName)
    });

    console.log(categories);
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState();
  const [maxQuantity, setMaxQuantity] = useState(" ");
  const [minQuantity, setMinQuantity] = useState(" ");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element
  const history = useHistory();

  let categories = [];

  React.useEffect(() => {
    Axios.get("/category").then((res) => {
      setCategory(res.data);
      
    });
  });


  const addProducts = (e) => {
   
    console.log(file)
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        title: title,
        description: description,
        category: categoryValue,
        minQuantity: minQuantity,
        maxQuantity: maxQuantity,
        price: price,
        image: file,
      },
      withCredentials: true,
      url: "/dealer/add-item",
    }).then((res) => {
      if (res.data.loginErr){ alert("Login failed") 
      history.push("/signin")}
      else if (res.data.err) alert(res.data.err);
      else {
        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("");
        setFile("");
        alert("product added successfully");
      }
      history.push('/add-product')
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
                type="number"
              />
              <Formlabel>Min Quantity</Formlabel>
              <FormInput
                onChange={(e) => setMinQuantity(e.target.value)}
                required
                type="number"
                
              />

              <Formlabel htmlFor="file">Upload Image </Formlabel>
              <FileBase
                className="fileUpload"
                type="file"
                multiple={true}
                // onDone={({ base64 }) => setFile(base64)}

                onDone={async(Files)=>{
                  
                  let arry=[]
                  await Files.map((img,index)=>{
                    let data ={
                      Image:img.base64,
                      type:img.file.type
                    };
                    arry.push(data);
                  })
                    setFile(arry);
                  
                }}
              />

              {/* {data.path && <img src={data.path} alt={data.name} />} */}
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
