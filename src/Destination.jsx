export function DestinationImage(){
    const Destinationdata = [
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o='},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o='},
        {id:3, imageUrl: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o='},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o='},
        {id:5, imageUrl: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o='},
    ]
    return(
        <>
           <div className="destination-container">
           <h1>Explore india</h1>
           <h4>These popular destinations have a lot to offer</h4>
           <div className="destination-image-container">
           {Destinationdata.map(function(item, index) {
                    return (
                        <div className="destination-image-div">
                            <img key={item.id} src={item.imageUrl} alt="Destination" />
                        </div>
                    );
                })}
                </div>
           </div>
        </>
    )
} 