import EachList from "./EachList";
import { useState, useEffect } from 'react';

const Componentlists = () => {

    const [value, setValue] = useState('');
    let [data, setData] = useState([]);

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem('value')))
    }, []);

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    let filteredData = data.filter(item => item.title.includes(value))
    return (
        <>
            <div className="genereal">
                <form>
                    <input type="search" id="filter" placeholder="Սա պոիսկի տեղ է..." value={value} onChange={evt => {
                        setValue(evt.target.value)
                    }} />
                </form>
                <div className="wrap">
                    {
                        filteredData.map((item, index) => {
                            return (
                                <EachList
                                    key={index}
                                    eachItem={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Componentlists;