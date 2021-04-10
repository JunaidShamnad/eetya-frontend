import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Axious from "../../axios";
import { fade, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLink,
} from "../Navbar/Navbar.elements";
import {
    FormSelectDiv,
    FormSelect,
    FormSelectOption,
  } from "../AddProducts/AddProducts.elements";
  import {  Formlabel,SearchIcon } from "./FilterPage.elements";
import {
  Card,
  CardContainer,
  CartIcon,
  FadeText,
  FilterIcon,
  MainDiv,
  ImageContainer,
  ProductTitle,
  ProductPrice,
  ProductUl,
  ProductLi,
  LeftArrow,
  PrevText,
  ProductPageLi,
  ProductPageUl,
  RightArrow,
} from "../ProductsSection/ProductsSection.elements";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    color:'#fff',
    fontSize:'20px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2,2, 2, 0),
    color:'#fff',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '220px',
      },
    },
  },
}));


const Filter = () => {
    const classes = useStyles();
  
  const [ProductData, setProductData] = useState([]);
  const [category,setCategory] = useState([])
  const [wholesaler,setWholsaler]=useState([])
  useEffect(() => {
    // Axious({
    //   method: "POST",
    //   url: "/products",
    // }).then((response) => {
    //   setProductData(response.data);
    // });
    Axious.get('/category').then(res=>setCategory(res.data))
    Axious.get('/wholesaler').then(res=>setWholsaler(res.data))
  }, []);

  const [PageNo, setPageNo] = React.useState(1);

  // const updateProductData =async (num) => {
  //   console.log("before: "+PageNo);
    
  //   await setPageNo(PageNo + num);
  //   console.log(PageNo);
  //   Axious({
  //     method: "POST",
  //     url: "/products",
  //     data: { page: PageNo },
  //   }).then((response) => {
  //     setProductData(response.data);
  //     console.log(response.data);
  //     scroll.scrollToTop();
  //   });
  // };

  useEffect(() => {
    Axious({
      method: "POST",
      url: "/products",
      data: { page: PageNo },
    }).then((response) => {
      setProductData(response.data);
      console.log(response.data);
      scroll.scrollToTop();
    });
    
  }, [PageNo])

  const allProducts = ()=>{
    Axious({
      method: "POST",
      url: "/products",
      data: { page: PageNo },
    }).then((response) => {
      setProductData(response.data);
     
      scroll.scrollToTop();
    });
  }
  const categoryHandler = (e)=>{
    if(e.target.value === "ALL") allProducts()
    else Axious.post('/get-cat-products',{category:e.target.value}).then(res=>setProductData(res.data))
  }
  //search handler
const searchHandler =(e)=>{
  if(e.target.value === "") allProducts()
  else Axious.post('/searchProducts',{data:e.target.value}).then(res=>setProductData(res.data))
}
  return (
    <>
      <MainDiv>
        <NavbarContainer>
      

    <FormSelectDiv>
    <Formlabel>Product Category </Formlabel>
    
    <FormSelect required onChange={categoryHandler}>
    <FormSelectOption >
       ALL
      </FormSelectOption>
      {category.map((cat,key)=>{
        return <FormSelectOption >
        {cat.categoryName}
      </FormSelectOption>

      })}
        
      </FormSelect>

      </FormSelectDiv>

     
        </NavbarContainer>
        <NavLink to="/filter">
                     <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={searchHandler}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                </NavLink>
        {/* <NavbarContainer>
     

    <FormSelectDiv>
    <Formlabel>Wholesaler</Formlabel>
    <FormSelect required>
      {wholesaler.map((saler,index)=>{
        return <FormSelectOption >
        {saler.username}
      </FormSelectOption> 
      })}
        
      </FormSelect>

      </FormSelectDiv>
        </NavbarContainer> */}

        <CardContainer>
          {ProductData.map((item, index) => {
            return (
              <Card
                key={index}
                to={{ pathname: `product-details/${item.id}` }}
              >
                <ImageContainer src={`data:image/${item.images[0].type};base64,${item.images[0].data}`} />
                <ProductUl>
                  <ProductLi>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductLi>
                  <ProductLi>
                    <CartIcon />
                  </ProductLi>
                </ProductUl>
              </Card>
            );
          })}
        </CardContainer>
        <ProductPageUl>
          <ProductPageLi
            onClick={() => {
              setPageNo(PageNo - 1)
              // updateProductData(-1);
            }}
          >
            
            <LeftArrow /> <PrevText>Previous Page</PrevText>
          </ProductPageLi>
          <ProductPageLi
            onClick={() => {
              setPageNo(PageNo + 1)
              // updateProductData(+1);
            }}
          >
            
            <PrevText>Next Page</PrevText> <RightArrow />
          </ProductPageLi>
        </ProductPageUl>
      </MainDiv>
    </>
  );
};

export default Filter;
