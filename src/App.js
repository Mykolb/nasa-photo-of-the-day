import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Header } from './components/header/Header';
import { Card, CardText, CardTitle, CardSubtitle} from 'reactstrap'
// import style from 'style.modules.css'


const App = () => {
    // const [state, setState] = useState(set initial state)
    //state & useEffect Hook 
    const [nasaPic, setNasaPic] = useState('');
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=UsAsttf8LH7Ey67UNyDNIzb0SuXqcBcTG7Xuf04u')
      .then(res => setNasaPic(res.data))
      // .then(res => console.log(res))
      .catch(error => console.log(error))
    }, []);
  
  
    return(
      <div className='style.container'>
        <Header />
        <Card>
        <iframe src="https://www.youtube.com/embed/xc1SzgGhMKc?start=850"   alt="nasa video of the day"></iframe>
        <CardTitle>{nasaPic.title}</CardTitle>
        <CardSubtitle>{nasaPic.date}</CardSubtitle>
        <CardText>{nasaPic.explanation}</CardText>
        </Card>
      </div>
    )} 

    export default App;
