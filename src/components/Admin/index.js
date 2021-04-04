import React, { useEffect, useState } from 'react'
import { MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr } from './Admin.elements'
import Axios from 'axios'

const Admin = () => {

    const [allData, setAllData] = useState(null)

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/admin/getAllUsers",
        }).then((res) => {
            console.log(res.data);
            if (res.data.loginErr) alert('Login failed')
            else if (res.data.err) alert(res.data.err)
            else {
                setAllData(res.data)
            }
        });
    }, [])

    const getUserName = (userId) => {
        const User = allData[0].find(user => user._id === userId)
        return User?.name
    }
    const getDealerName = (dealerId) => {
        const Dealer = allData[1].find(dealer => dealer._id === dealerId)
        return Dealer?.name
    }
    const getTotalMoneySpend = (userId) => {
        let totalMoney = 0
        allData[2].forEach(order => {
            if (order.userId === userId) totalMoney += order.bill
        })
        return totalMoney
    }
    const getTotalMoneyEarned = (dealerId) => {
        let totalMoney = 0
        allData[2].forEach(order => {
            if (order.storeId == dealerId) totalMoney += order.bill
        })
        return totalMoney
    }
    if (!allData) return <></>
    return (
        <>
            <MainDiv>
                <h3>All Orders</h3>
                <TableContainer>
                    <TableTag>
                        <TableTr>
                            <TableTh> Order_Id</TableTh>
                            <TableTh>Buyer</TableTh>
                            <TableTh>Seller</TableTh>
                            <TableTh>Total</TableTh>
                            <TableTh>Commission 5%</TableTh>

                        </TableTr>
                        {allData[2].map((order, i) => (
                            <TableTr key={i}>
                                <TableTd>{order._id}</TableTd>
                                <TableTd>{getUserName(order.userId)}</TableTd>
                                <TableTd>{getDealerName(order.storeId)}</TableTd>
                                <TableTd>{order.bill}</TableTd>
                                <TableTd>{order.bill * 0.05}</TableTd>
                            </TableTr>
                        ))}
                    </TableTag>
                </TableContainer>
                <h3>All Buyers</h3>
                <TableContainer>
                    <TableTag>
                        <TableTr>
                            <TableTh> Name</TableTh>
                            <TableTh>Email</TableTh>
                            <TableTh>website</TableTh>
                            <TableTh>Total spend</TableTh>

                        </TableTr>
                        {allData[0].map((user, i) =>
                        (<TableTr key={i}>
                            <TableTd>{user.name}</TableTd>
                            <TableTd>{user.email}</TableTd>
                            <TableTd>{user.website}</TableTd>
                            <TableTd>{getTotalMoneySpend(user._id)}</TableTd>
                        </TableTr>)
                        )}
                    </TableTag>
                </TableContainer>
                <h3>All Sellers</h3>
                <TableContainer>
                    <TableTag>
                        <TableTr>
                            <TableTh> Name</TableTh>
                            <TableTh>Email</TableTh>
                            <TableTh>website</TableTh>
                            <TableTh>Money earned</TableTh>

                        </TableTr>
                        {allData[1].map((dealer, i) => (
                            <TableTr key={i}>
                                <TableTd>{dealer.name}</TableTd>
                                <TableTd>{dealer.email}</TableTd>
                                <TableTd>{dealer.website}</TableTd>
                                <TableTd>{getTotalMoneyEarned(dealer._id)}</TableTd>

                            </TableTr>
                        ))}
                    </TableTag>
                </TableContainer>
            </MainDiv>
        </>
    )
}

export default Admin
