import React,{Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {
    CHART_STATS_COLS,
    YEAR_COLS,
  } from './utils'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
            filter: 'pts',
            filter2: "'18 - '19",
            stat: CHART_STATS_COLS.reduce((acc, col) => {
                acc[col] = {}
                return acc
            }, {}),
            year: YEAR_COLS.reduce((acc, col) => {
                acc[col] = {}
                return acc
            }, {}),
        }
    }

    
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right',
    }

    renderSelector2 = () => {
        const { filter } = this.state

    
            return (
            <FormControl variant="outlined">
                <Select
                style = {{backgroundColor:"#ccf6ff",border:'1px solid #485861'}}
                input={<OutlinedInput labelWidth={1} notched={false} />}
                value={filter}
                onChange={e => this.setState({ filter: e.target.value })}
                
                >
                {CHART_STATS_COLS.map(col => (
                    <MenuItem key={col} value={col}>
                    {col.toUpperCase()}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            )
    }
    
    renderSelector = () => {
        const { filter2 } = this.state
    
            return (
            <FormControl variant="outlined">
                <Select
                style = {{backgroundColor:"#ccf6ff",border:'1px solid #485861'}}
                input={<OutlinedInput labelWidth={1} notched={false} />}
                value={filter2}
                onChange={e => this.setState({ filter2: e.target.value })}
                >
                {YEAR_COLS.map(col => (
                    <MenuItem key={col} value={col}>
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
                {this.renderSelector()}
                {this.renderSelector2()}
                <button style= { {
                    fontSize: 20,
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
                        tooltips:{
                            displayColors:false,
                            enabled: true,
                            mode: 'single',
                            callbacks:{
                              label: function(tooltipItems){
                                  return tooltipItems.yLabel+" pts"
                              },
                              afterBody: function() {
                                return "21-03-2019 vs POR"; 
                             }
                            },
                            backgroundColor:"#485861",
                            bodySpacing: 10,
                            bodyFontSize: 20,
                        },
                        legend:{
                            display:false,
                            potition:this.props.legendPosition,
                        },
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