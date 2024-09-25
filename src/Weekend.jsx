import { useState } from "react"

export function WeekendImage({searchTerm}){
    const weekendData = [
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:3, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' City of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:5, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:6, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:7, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:8, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:3, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:5, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:6, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:7, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:8, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:3, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:5, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:6, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:7, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:8, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:1, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        {id:2, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:3, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:4, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:5, imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',title: 'Lemon Locke', location:'Tower hamlets United kingdo', reviewPoint: '8.8', review: 'Suprb 11,506 reviews'},
        {id:6, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',title: 'Cheval Three  Quary at the Tower ', location:' city of London  , united Kingdo', reviewPoint: '7.8', review: 'Suprb 11,506 reviews'},
        {id:7, imageUrl: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',title: 'numa Vita Apartments', location:'Santa Maria Novella, Italy, Florence', reviewPoint: '9.8', review: 'Fabulous 11,506 reviews'},
        {id:8, imageUrl: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',title: '7Seasons Apartments Budapest', location:'06 Terezvaros, Hungary, Budapest', reviewPoint: '8.8', review: 'Fabulous 11,506 reviews'},
        
    ] 
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => {
        console.log(image)
        setSelectedImage(image)
}

    const filteredData = weekendData.filter((item ) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    return(
        <>
           <div className="weekend-container">
               <h1>Deals for the weekend</h1>
                {!selectedImage && (
                    <div className="weekend-image-container">                     
                    {filteredData.map(function(item) {
                        return (
                            <div className="weekend-image-div" onClick={() => handleImageClick(item)}>
                                <img key={item.id} src={item.imageUrl} alt="weekend image" />
                                <h3>{item.title}</h3>
                                <h6>{item.location}</h6>
                                <h5>{item.review}</h5>                                                        
                            </div>
                    )
                     })}
                </div>
                )}
                     {selectedImage && (
                        <div className="selected-image-container">
                            <img src={selectedImage.imageUrl} alt={selectedImage.title} /> 
                            <div>
                                <h3>{selectedImage.title}</h3>
                                <h5>{selectedImage.location}</h5>
                                <h6>{selectedImage.review}</h6>
                                <p>you'll be astonished by the beauty that remains. You can see ballet in the Drechsler Palace, climb to the citadel on Gellért Hill, or see how the Imperial royal family lived at Buda Castle</p>
                                <button onClick={()=> setSelectedImage(null)}>close</button>
                            </div>
                        </div> 
                     )}                     
           </div>
        </>
    )
}       