import EachList from "./EachList";
import {useState, useEffect} from 'react';

const Componentlists = () => {
    
    const [value, setValue] = useState('');
    let [data, setData] = useState([]);

    useEffect(() => {
      data = fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setData(json));
    }, [value]);

    let filteredData = data.filter(item => item.title.includes(value))
    return (
        <>
            <div className="genereal">
                <form>
                    <input type="search" id="filter" placeholder="Search..." value={value} onChange={evt => {
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