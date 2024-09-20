export function PropertyImage(){
    const PropertyData = [
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o='},
        {id:3, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o='},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o='},
    ]
    return(
        <>
           <div className="property-container">
           <h1>Browse by property type</h1>
           <div className="property-image-container">
           {PropertyData.map(function(item, index) {
                    return (
                        <div className="property-image-div">
                            <img key={item.id} src={item.imageUrl} alt="propert image" />
                        </div>
                    );
                })}
                </div>
           </div>
        </>
    )
}