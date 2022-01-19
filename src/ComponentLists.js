import EachList from "./EachList";
import {useState, useEffect} from 'react';

const Componentlists = ({data, setData}) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        let newData = data.filter(item => {
            return item.title.includes(value)
        })
        console.log(newData)
        setData(newData)
    }, [value]);

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
                        data.map((item, index) => {
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