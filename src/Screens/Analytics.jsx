import React from 'react'
import logo from './../assets/images/bam.png'
import solar_card from './../assets/JsonData/solar_card.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import ThemeAction from '../redux/actions/ThemeAction'
import { useSelector } from 'react-redux'



const chartOptions={
    series:[
        {
        name:'No of Bookings',
        data:[5,2,4,8,3,6,1,4]    
    }
    ],
    options: {
        colors: ['#008FFB', '#00E396', '#fb0b12','#CED4DC'],
        chart:{
            background:'transparent'
            
        },
        dataLabels:{
            enabled:true,
            background:{
                foreColor:'white'
            }
        },
        stroke:{
            curve:'smooth'
        },
        xaxis:{
            categories:['Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels:{
                style:{
                    colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',]
                }    
            }
        },
        yaxis:{
            labels:{
                style:{
                    colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',]
                }    
            }
        },
        legend: {
            position: 'top',
            labels: {
                colors:['#008FFB', '#00E396'] ,
                useSeriesColors: false
            },
        },
        grid: {
            show: true
        },
        tooltip:{
            fillSeriesColor:'true',
            x:{show:true}
            
        }   
        
    }

}


const Analytics = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">
                In Out Measures
            </h2>
            
            <div className="row">
                <div className="col-6">
                        <div className="card full-height">
                                <Chart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type = "area"
                                height='100%'
                               
                                />
                        </div>
                </div>
                <div className="col-6">
                    <div className="row">
                            {
                                solar_card.map((item,index) => (
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
                    
                </div>

        </div>
    )
}

export default Analytics
