import React, {useState} from 'react'
import './App.css';
import Car from './Car/Car';

function App() {

    const stasik = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'mazda', year: 2010}
        ],
        pageTitle: 'React '
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageTitle, setPageTitle] = useState(stasik.pageTitle);

    const changeTitleHandler = () => {
        setPageTitle(stasik.pageTitle + ' xyu')

    }

    const divStyle = {
        textAlign: 'center'
    }

    const cars = stasik.cars
        return (
            <div style={divStyle}>
                <h1>{pageTitle}</h1>

                <button onClick={changeTitleHandler}>Change title</button>

                <Car
                    name={cars[0].name}
                     year={cars[0].year} />
                <Car
                    name={cars[1].name}
                    year={cars[1].year} />
                <Car
                    name={cars[2].name}
                    year={cars[2].year} />
            </div>
        );
}


export default App;
