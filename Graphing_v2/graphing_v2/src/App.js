import React,{Component} from 'react';
import PlayerPic from './lebronJamesPic.png';
import './App.css';
import Chart from './Chart.js'
import { async } from 'q';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      season: undefined,
      stat_array: [],
    }
  }
  

  getAllStats = async(e) => {
    e.preventDefault();
    const season_choice = e.target.elements.season.value;
    const stat_choice = e.target.elements.stat.value;

    const api_call = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=${season_choice}&player_ids[]=237&per_page=100`);
    const api_call_data = await api_call.json();
    console.log(season_choice)
    console.log(stat_choice)
    console.log(api_call_data);
    this.setState({
      //stat is based on choice and loops through all stats
      season: season_choice,

    })
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //AJAX CALL HERE
    this.setState({
      chartData:{
        labels: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        datasets:[
           {
              backgroundColor: "2E48EE",
              borderColor: "#ccf6ff",
              pointBackgroundColor: "#ccf6ff",
              pointRadius:5,
              lineTension: 0.3,
              pointHoverRadius: 8,
              fill: false,
              pointHoverBackgroundColor: "2E48EE",
              pointHoverBorderColor: "2E48EE",
               label: 'Lebron James',
               data:[
                18,
                28,
                29,
                33,
                31,
                36,
                27,
                27,
                24,
                31,
                27,
                33,
                25,
                27,
                30,
                29,
                29,
                26,
                24,
                32,
                19,
                28,
                35,
                29,
                29,
                28,
                18,
                24,
                26,
                25,
                44,
                22,
                51,
                32,
                22,
                24,
                14,
                38,
                28,
                22,
                28,
                42,
                24,
                29,
                35,
                20,
                13,
                36,
                22,
                22,
                17,
                24,
                18,
                28,
                23,
               ],

           }
        ]
      },
    });
  }
  
  render(){
  return (
    <div className="App">

      <div className="pageContainer">
        <div className="player">
          <img src={PlayerPic} class="headshot" alt="picture of player" />
          <p class="playerName">LeBron James</p>
          <div className="playerBio">            
            <span className='bioInfo' id='team'><span class="bioTitle" >Team:</span> Los Angeles Lakers (LAL)</span>
            <span className='bioInfo' id='position'><span class="bioTitle" >Position:</span> Small Forward (SF)</span>
            <span className='bioInfo' id='age'><span class="bioTitle" >Age:</span> 34</span>
            <span className='bioInfo' id='weight'><span class="bioTitle" >Weight:</span> 250 lbs</span>            
            <span className='bioInfo' id='height'><span class="bioTitle" >Height:</span> 6' 8"</span>
          </div>          
        </div>
        <div className="chart">
          <Chart chartData = {this.state.chartData} getAllStats={this.getAllStats}/>
        </div>
        
      </div>
      
      
    </div>
  );
  }
}

export default App;
