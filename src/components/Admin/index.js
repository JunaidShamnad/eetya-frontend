import React from 'react'
import { MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr,AdminTitle,TableDiv, Boxtitle } from './Admin.elements'

const Admin = () => {
    return (
        <>
           <MainDiv>
           <AdminTitle>Admin Page</AdminTitle>
           <TableDiv>
           <Boxtitle>All Orders</Boxtitle>
    <TableContainer>
    <TableTag>
        <TableTr>
            <TableTh>User Name</TableTh>
            <TableTh>Email</TableTh>
            <TableTh>Cart</TableTh>
   
        </TableTr>
        <TableTr>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
        </TableTr>
    </TableTag>
 </TableContainer>
 </TableDiv>
           </MainDiv> 
        </>
    )
}

export default Admin
