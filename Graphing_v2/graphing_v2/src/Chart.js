import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import {
    CHART_STATS_COLS,
    YEAR_COLS,
  } from './utils'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'

//Sources:
//https://www.chartjs.org/docs/latest/
//https://material-ui.com/getting-started/installation/

//No particular site used for inspiration

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
            filter: 'pts',
            filter2: "'18 - '19",
        }
    }

    //function to allow users to select a season from a drop down menu for any year from 2010-2018 
    renderSelector = () => {
        const { filter2 } = this.state //set inital value of year drop down menu to '18 - 19'
            return (
            <FormControl variant="outlined">
                <Select
                style = {{backgroundColor:"#ccf6ff",border:'1px solid #485861'}}
                input={<OutlinedInput labelWidth={1} notched={false} />}
                value={filter2}
                onChange={e => this.setState({ filter2: e.target.value })}
                >
                {/* use strings from YEAR_COLS from utils.js for drop down menu*/}
                {YEAR_COLS.map(col => (
                    <MenuItem key={col} value={col}>
                    {/*make strings from YEAR_COLS uppercase*/}
                    {col.toUpperCase()}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            )
        }
    
    //function to allow users to select a statistic category from a drop down menu 
    renderSelector2 = () => {
        const { filter } = this.state //set inital value of stat drop down menu to 'pts'
            return (
            <FormControl variant="outlined">
                <Select
                style = {{backgroundColor:"#ccf6ff",border:'1px solid #485861'}}
                input={<OutlinedInput labelWidth={1} notched={false} />}
                value={filter}
                onChange={e => this.setState({ filter: e.target.value })}
                >
                {/* use strings from CHART_STATS_COLS from utils.js for drop down menu*/}
                {CHART_STATS_COLS.map(col => (
                    <MenuItem key={col} value={col}>
                    {/*make strings from CHART_STATS_COLS uppercase*/}
                    {col.toUpperCase()}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            )
    }

    render(){
        return(
            <div className = "chart">
                <form onSubmit = {this.props.getAllStats}>
                {/* Input dropdown menus for year and stat category */}
                {this.renderSelector()}
                {this.renderSelector2()}
                {/* Input styled 'Update' button that outputs a sucess message upon clicking */}
                <button style= { {
                    height: '40',
                    backgroundColor: 'transparent',
                    color: '#ccf6ff',
                    border: '3px solid #ccf6ff',
                    padding: '10px',
                    margin: "10px",
                    cursor: 'pointer',
                }} onClick={() => alert("Graph Updated!")}>
                    Update
                </button>
                </form>
                <Line  
                    data = {this.state.chartData}
                    options={{
                        //customize output shown when hovering over points on line graph
                        tooltips:{
                            displayColors:false,
                            enabled: true,
                            mode: 'single',
                            callbacks:{
                              //when hovering over point on graph, display y-axis value
                              label: function(tooltipItems){
                                  return tooltipItems.yLabel+" pts"
                              },
                              //when hovering over a point on graph, display hardcoded date of game and abbreviation for opposing team
                              afterBody: function() {
                                return "21-03-2019 vs POR"; 
                             }
                            },
                            backgroundColor:"#485861",
                            bodySpacing: 10,
                            bodyFontSize: 20,
                        },
                        legend:{
                            //hide auto-generated graph legend
                            display:false,
                        },
                        //customize y and x axis on line graph
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false,
                                    color: "#fff"
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "#fff"
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Games Played',
                                    fontColor: "#fff",
                                    fontSize: "17",
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false,
                                    color: "#fff"
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "#fff",
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Points',
                                    fontColor: "#fff",
                                    fontSize: "17",
                                }
                            }]
                        },
                    }}


                />
            </div>
        )
    }
}

export default Chart;