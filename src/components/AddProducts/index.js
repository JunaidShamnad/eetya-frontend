import React, { useState, useRef, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { animateScroll as scroll } from "react-scroll";

const AddProduct = () => {
  useEffect(() => {
    Axios.get("/category").then((res) => {
      console.log(res.data);
      setCategory(res.data);
      setCategoryValue(res.data[0].categoryName);
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

  let sampleImg =
    "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png";
  const [{ altOne, srcOne }, setImgOne] = useState({
    srcOne: sampleImg,
    altOne: "Image 1 preview",
  });

  const [{ altTwo, srcTwo }, setImgTwo] = useState({
    srcTwo: sampleImg,
    altTwo: "Image 2 preview",
  });

  const [{ altThree, srcThree }, setImgThree] = useState({
    srcThree: sampleImg,
    altThree: "Image 3 preview",
  });

  let categories = [];

  React.useEffect(() => {
    Axios.get("/category").then((res) => {
      setCategory(res.data);
    });
  }, []);

  const addProducts = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
    Swal.queue([
      {
        title: "Add product",
        confirmButtonText: "Add Product",
        cancelButtonText: "Edit more",
        html:
          "<h3>Product name: " +
          title +
          "<h3></br><p>Description: " +
          description +
          "</p></br><p>Price per product: " +
          price+"</p>",
        showLoaderOnConfirm: true,
        showCancelButton: true,
        preConfirm: () => {
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
              dealerId: JSON.parse(localStorage.getItem("user")).user._id,
            },
            withCredentials: true,
            url: "/dealer/add-item",
          }).then((res) => {
            if (res.data.loginErr) {
              alert("Login failed");
              history.push("/signin");
            } else if (res.data.err) alert(res.data.err);
            else {
              Swal.fire(
                "Product added succesfully",
                title + " has listed in Eetya!",
                "success"
              );
              setTitle("");
              setDescription("");
              setCategory([]);
              setPrice("");
              setFile([]);
              window.location.reload();
            }
          });
        },
      },
    ]);
  };

  return (
    <>
      <MainDiv>
        <FadeText>Add Product</FadeText>
        <Row>
          <LeftDiv>
            {/* {product
                  ? product.images.map((img, index) => {
                      return (
                        <SubImageConatiner
                          src={`data:image/${img.type};base64,${img.data}`}
                        />
                      );
                    })
                  : ""} */}

            <Maintitle>Image Preview</Maintitle>
            <MainImageDiv>
              <MainImageConatiner alt={altOne} src={srcOne} />
            </MainImageDiv>
            <SubImageDiv>
              <SubImageConatiner alt={altOne} src={srcOne} />
              <SubImageConatiner alt={altTwo} src={srcTwo} />
              <SubImageConatiner alt={altThree} src={srcThree} />
            </SubImageDiv>
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

                onDone={async (Files) => {
                  console.log(Files);
                  if (Files.length > 3) {
                    Swal.fire(
                      "ALERT!",
                      `Cannot upload files more than 3`,
                      "warning"
                    );
                    setFile(null);
                  }
                  let arry = [];
                  await Files.map((img, index) => {
                    if (index <= 2) {
                      if (index === 0) {
                        setImgOne({ srcOne: img.base64 });
                      } else if (index === 1) {
                        setImgTwo({ srcTwo: img.base64 });
                      } else if (index === 2) {
                        setImgThree({ srcThree: img.base64 });
                      }

                      let data = {
                        Image: img.base64,
                        type: img.file.type,
                      };
                      arry.push(data);
                    }
                  });

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
