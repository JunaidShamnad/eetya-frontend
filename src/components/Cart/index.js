import React from 'react'
import { MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr,AdminTitle,TableDiv,Boxtitle } from '../Admin/Admin.elements'
import {ImageBox,CartTotalContainer,CartTotalText, PriceTitle,FormButton,RightDiv} from './Cart.elements'
const Cart = () => {
    return (
        <>
           <MainDiv>
           <AdminTitle>Cart Page</AdminTitle>
           <TableDiv>
           <Boxtitle>All Orders</Boxtitle>
    <TableContainer>
    <TableTag>
        <TableTr>
            <TableTh>Name</TableTh>
            <TableTh>Price</TableTh>
            <TableTh>Category</TableTh>
            <TableTh>Quantity</TableTh>
            <TableTh>Image</TableTh>
   
        </TableTr>
        <TableTr>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd> <ImageBox src="" alt=""/> </TableTd>
          
        </TableTr>
    </TableTag>
 </TableContainer>
 </TableDiv>

 <TableDiv>
             <CartTotalContainer>
               <PriceTitle>Total</PriceTitle>
<RightDiv>
 <CartTotalText> $45 </CartTotalText>
<FormButton>Checkout</FormButton>
</RightDiv>
             </CartTotalContainer>
           </TableDiv>
           </MainDiv> 
          
        </>
    )
}

export default Cart
