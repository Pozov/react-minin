import React, {useCallback, useState} from 'react'
import './App.css';
import Car from './Car/Car'

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

    const handleInput = () => {
        setPageTitle(document.getElementById("1dd").value)
    }

    const car0  = useCallback(() => {
        setPageTitle(stasik.cars[0].name)
        }
    )
    const car1  = useCallback(() => {
            setPageTitle(stasik.cars[1].name)
        }
    )
    const car2  = useCallback(() => {
            setPageTitle(stasik.cars[2].name)
        }
    )

    const divStyle = {
        textAlign: 'center'
    }

    const cars = stasik.cars
        return (
            <div style={divStyle}>
                <h1>{pageTitle}</h1>

                <input type="text" id="1dd"/>

                <button onClick={handleInput}>Change title</button>

                <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={car0}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={car1}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={car2}
                />
            </div>
        );
}


export default App;
