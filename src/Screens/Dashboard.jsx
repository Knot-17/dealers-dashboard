import React ,{useEffect,useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import CardMedia from '@mui/material/CardMedia';

import axios from 'axios';

import { Link } from 'react-router-dom'


import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import statusCards from '../assets/JsonData/status-card-data.json' 
import Badge from '../components/badge/Badge'
import ThemeAction from '../redux/actions/ThemeAction'

import Ella from './../assets/images/ella.jpg'



const renderCustomerHead=(item,index)=>(
    <th key={index}>{item}</th>
)

const renderCustomerBody=(item,index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "",
        "task",
        "date fixed",
        "status"
    ],
    body: [
        {
            id: <Checkbox/>,
            task: "Table arrangement",
            date: "17 Jun 2021",
           
            status: "done"
        },
        {
            id: <Checkbox/>,
            task: "Stage arrangement",
            date: "1 Jun 2021",
           
            status: "pending"
        },
        {
            id: <Checkbox/>,
            task: "Chair Arrangement",
            date: "27 Jun 2021",
           
            status: "not started"
        }
    ]
}

const orderStatus = {
    "done": "success",
    "not started": "primary",
    "pending": "warning",
    "not working": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr >
        <td>{item.id}</td>
        <td>{item.task}</td>
       
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)


const Dashboard = () => {
    localStorage.setItem('id', 1);
   
    


    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="card full-height">
                        <CardMedia
                            component="img"
                            height="200"
                            image={Ella}
                            alt="Beach wedding"
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,index) => (
                                <div className="col-6" key={index} >
                                    
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                    
                                </div>
                                    ))
                        }
                    </div>
                </div>
                
                
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3> Task Details </h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData ={latestOrders.header}
                                renderHead={(item,index) => renderOrderHead(item,index) }
                                bodyData={latestOrders.body}
                                renderBody={(item,index) => renderOrderBody(item,index) }
                            />
                        </div> 
                        <div className="card__footer">
                            <Link to='/'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
