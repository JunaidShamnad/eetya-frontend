import React,{useState,useRef} from "react";
import Axios from 'axios'
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
import {  Form, FormInput, Formlabel} from "../SignUp/SignUp.elements";
import {  RightDiv,FadeText,DeleteIcon,Maintitle } from "../ProductEdit/ProductEdit.elements";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(""); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" }); 
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element
 
  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
}


const uploadFile = () => {
  const formData = new FormData();        formData.append('file', file); // appending file
  Axios.post('http://localhost:4000/items-images', formData, {
      onUploadProgress: (ProgressEvent) => {
          let progress = Math.round(
          ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
          setProgess(progress);
      }
  }).then(res => {
      console.log(res);
      getFile({ name: res.data.name,
               path: 'http://localhost:4000' + res.data.path
             })
  }).catch(err => console.log(err))}


  const addProducts = () => {

    Axios({
      method: "POST",
      data: {
        title: title,
        description: description,
        category: category,
        price: price,
      
      },
      withCredentials: true,
      url: "http://localhost:4000/items",
    }).then((res) => {
      console.log(res);
    })};
   

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
             <DeleteIcon/>
            <Formlabel>Product Name</Formlabel>
            <FormInput  onChange={(e) => setTitle(e.target.value)}  required  type="text"/>

            <Formlabel>Product Details</Formlabel>
            <FormInput  onChange={(e) => setDescription(e.target.value)}  required  type="text"/>

            <Formlabel>Product Category</Formlabel>
            <FormInput  onChange={(e) => setCategory(e.target.value)}  required  type="text"/>

            <Formlabel>Product Price</Formlabel>
            <FormInput  onChange={(e) => setPrice(e.target.value)}   required  type="text"/>

            <Formlabel htmlFor="file">Upload Image </Formlabel>
            <FormInput type="file"   ref={el} name="file" onChange={handleChange}/>
           {/* displaying received image*/}
           {data.path && <img src={data.path} alt={data.name} />}
            <ButtonDiv>
              <BuyButton type="submit" onClick={() => {
                 uploadFile();
                 addProducts();
        }} >Add Product</BuyButton>
            </ButtonDiv>
            </Form>
        
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  );
};

export default AddProduct;
