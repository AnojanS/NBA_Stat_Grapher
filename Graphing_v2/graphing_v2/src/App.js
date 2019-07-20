import React,{Component} from 'react';
import PlayerPic from './lebronJamesPic.png'; //image provided by https://www.espn.com/nba/player/
import './App.css';
import Chart from './Chart.js'

//Sources:
//https://www.chartjs.org/docs/latest/
//https://material-ui.com/getting-started/installation/

//No particular site used for inspiration

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
    }
  }
  

  getAllStats = async(e) => {
    e.preventDefault();
    //api data fetching Lebron James' point toals over the course of the 2018-2019 NBA season
    //api data not used anywhere
    const api_call = await fetch(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=237&per_page=100`);
    const api_call_data = await api_call.json();
  }

  componentWillMount(){
    //run getChartData once App.js component is mounted
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        //empty x-axis values for Lebron James' graph
        labels: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        datasets:[
           {
              //styling for Lebron James' line graph
              backgroundColor: "2E48EE",
              borderColor: "#ccf6ff",
              pointBackgroundColor: "#ccf6ff",
              pointRadius:5,
              lineTension: 0.3,
              pointHoverRadius: 8,
              fill: false,
              pointHoverBackgroundColor: "2E48EE",
              pointHoverBorderColor: "2E48EE",
              //hardcoded y-axis values for Lebron James' graph
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
  
  //render Lebron James' graph, photograph, and hardcoded description
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
