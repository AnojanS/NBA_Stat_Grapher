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
            filter2: '2018',
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
                <button>
                    Update
                </button>
                </form>
                <Line 
                    data = {this.state.chartData}
                    options={{
                        legend:{
                            display:this.props.displayLegend,
                            potition:this.props.legendPosition,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
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