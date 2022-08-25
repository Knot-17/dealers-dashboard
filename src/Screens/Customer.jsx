import React from 'react'
import Table from '../components/table/Table'
import CustomerList from '../assets/JsonData/customers-list.json'
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const customerTableHead =[
    'Customer Name',
    'Date Booked',
    'Locations',
    'City',
    'Payment',
    "",
    ""
]

const renderHead =(item,index) => <th key={index}>{item}</th>


const renderBody= (item,index) => (
    <tr key={index}>
        <td>{item.Customer_Name}</td>
        <td>{item.Date_Booked}</td>
        <td>{item.Location}</td>
        <td>{item.City}</td>
        <td>{item.transaction}</td>
        <td> <IconButton> <CallIcon sx={{fontSize:30,color:"#349eff"}} /> </IconButton></td>
        <td> <IconButton> <DeleteIcon sx={{fontSize:30,color:"red"}}/> </IconButton></td>
    </tr>
)



const Customer=()=> {
    return (
        <div>
            <h2 className="page-header">
                Customers
            </h2>
            <div className="row">
                <div className="col-12" >
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item,index)=>renderHead(item,index)}
                                bodyData={CustomerList}
                                renderBody={(item,index)=>renderBody(item,index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
