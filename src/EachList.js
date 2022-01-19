const EachList = ({eachItem}) => {

    return (
        <div className="eachItem">
            <img src={eachItem.image} alt='fakeClothes' style={{height: 100}}/>
            <p>description {eachItem.description.slice(0, 19)}</p>
            <p>Price: {eachItem.price}</p>
            <p>Rating: {eachItem.rating.rate}</p>
            <p>Title: {eachItem.title}</p>
        </div>
    );
}

export default EachList;