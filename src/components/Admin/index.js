import React from 'react'
import { MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr } from './Admin.elements'

const Admin = () => {
    return (
        <>
           <MainDiv>
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
           </MainDiv> 
        </>
    )
}

export default Admin
