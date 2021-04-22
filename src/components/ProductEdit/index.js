import React, { useState, useEffect } from 'react'
import Axios from '../../axios'
import FileBase from 'react-file-base64'
import { ProductShowcase } from '../../data/Products'
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
} from '../ProductDetails/ProductDetails.elements'
import {
  FormSelectDiv,
  FormSelect,
  FormSelectOption,
} from '../AddProducts/AddProducts.elements'
import { Form, FormInput, Formlabel } from '../SignUp/SignUp.elements'
import {
  RightDiv,
  FadeText,
  DeleteIcon,
  Maintitle,
} from './ProductEdit.elements'
import { useParams } from 'react-router'
const ProductEdit = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState([])
  const [categoryValue, setCategoryValue] = useState()
  const [maxQuantity, setMaxQuantity] = useState(' ')
  const [minQuantity, setMinQuantity] = useState(' ')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState([]) // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: '', path: '' })
  const [oldProductData, setOldProduct] = useState('')
  const { id } = useParams() //Product Id
  const editProducts = (e) => {
    // console.log(title)
    e.preventDefault()
    console.log(oldProductData)
    Axios({
      method: 'POST',
      data: {
        id: id,
        title: title ? title : oldProductData.title,
        description: description ? description : oldProductData.description,
        category: categoryValue ? categoryValue : oldProductData.category,
        minQuantity: minQuantity == ' ' ? oldProductData.minQuantity :minQuantity ,
        maxQuantity: maxQuantity == ' ' ? oldProductData.maxQuantity :maxQuantity ,
        price: price ? price : oldProductData.price,
        images: file ? file : false,
      },
      withCredentials: true,
      url: '/Edit-Product',
    }).then((res) => {
      if(res.status) alert("Product edited !")
      else alert("Product editing failed try again letter !..")
      window.location.reload();
    })
  }
  useEffect(() => {
    Axios.post('/getProduct-edit', { Id: id }).then((res) =>
      setOldProduct(res.data)
    )
    Axios.get('/category').then((res) => setCategory(res.data))
  })

  return (
    <>
      <MainDiv>
        <FadeText>Edit Product</FadeText>
        <Row>
          <LeftDiv>
            <Maintitle>Image Preview</Maintitle>
            <MainImageDiv>
              {oldProductData.images ? (
                <MainImageConatiner
                  src={`data:image/${oldProductData.images[0].type};base64,${oldProductData.images[0].data}`}
                />
              ) : (
                ''
              )}
            </MainImageDiv>
            <SubImageDiv>
              {oldProductData.images
                ? oldProductData.images.map((img, index) => {
                    return (
                      <SubImageConatiner
                        src={`data:image/${img.type};base64,${img.data}`}
                      />
                    )
                  })
                : ''}
            </SubImageDiv>
          </LeftDiv>

          <RightDiv>
            <Form action='#'>
              <DeleteIcon />
              <Formlabel>Product Name</Formlabel>
              <FormInput
                placeholder={oldProductData.title}
                // value={oldProductData.title}
                onChange={(e) => setTitle(e.target.value)}
                required
                type='text'
              />

              <Formlabel>Product Details</Formlabel>
              <FormInput
                // value={oldProductData.description}
                placeholder={oldProductData.description}
                onChange={(e) => setDescription(e.target.value)}
                required
                type='text'
              />

              <Formlabel>Product Category</Formlabel>

              <FormSelectDiv>
                <FormSelect
                  onChange={(e) => setCategoryValue(e.target.value)}
                  required
                >
                  <FormSelectOption value={oldProductData.category}>
                    {oldProductData.category}
                  </FormSelectOption>
                  {category.map((category, index) => {
                    return (
                      <FormSelectOption
                        key={index}
                        value={category.categoryName}
                      >
                        {category.categoryName}
                      </FormSelectOption>
                    )
                  })}
                </FormSelect>
              </FormSelectDiv>

              <Formlabel>Product Price (Price of 1 Product)</Formlabel>
              <FormInput
                placeholder={oldProductData.price}
                // value={oldProductData.price}
                onChange={(e) => setPrice(e.target.value)}
                required
                type='text'
              />
              <Formlabel>Max Quantity</Formlabel>
              <FormInput
                placeholder={oldProductData.maxQuantity}
                // value={oldProductData.maxQuantity}
                onChange={(e) => setMaxQuantity(e.target.value)}
                required
                type='number'
              />
              <Formlabel>Min Quantity</Formlabel>
              <FormInput
                placeholder={oldProductData.minQuantity}
                // value={oldProductData.minQuantity}
                onChange={(e) => setMinQuantity(e.target.value)}
                required
                type='number'
              />

              {/* <Formlabel htmlFor='file'>Upload Image </Formlabel>
              <FileBase
                className='fileUpload'
                type='file'
                multiple={true}
                // onDone={({ base64 }) => setFile(base64)}

                onDone={async (Files) => {
                  console.log('len:' + Files.length)
                  let arry = []
                  await Files.map((img, index) => {
                    let data = {
                      Image: img.base64,
                      type: img.file.type,
                    }
                    arry.push(data)
                    // setFile(
                    //   file.concat(data)
                    // );
                  })
                  setFile(arry)
                }}
              /> */}
              <ButtonDiv>
                <BuyButton type='submit' onClick={editProducts}>
                  Update
                </BuyButton>
              </ButtonDiv>
            </Form>
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  )
}

export default ProductEdit
