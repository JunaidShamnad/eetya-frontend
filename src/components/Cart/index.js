import React from 'react'
import { MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr,AdminTitle,TableDiv, Boxtitle } from '../Admin/Admin.elements'
import {ImageBox,CartTotalContainer} from './Cart.elements'
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
           <ImageBox src="" alt=""/>
        </TableTr>
    </TableTag>
 </TableContainer>
 </TableDiv>
           </MainDiv> 
           <TableDiv>
             <CartTotalContainer>
               <Boxtitle>Total</Boxtitle>
             </CartTotalContainer>
           </TableDiv>
        </>
    )
}

export default Cart
