import { useState, useEffect } from "react";

const imageData = [
   
    'https://images.pexels.com/photos/1098745/pexels-photo-1098745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://cdn.prod.website-files.com/64949e4863d96e26a1da8386/64b948bea2bc8cd59a61f4d6_5e6132058d76902962d3355f_5980d68772dcdb00010d37fe_Slider%252520example.png',
    'https://q-xx.bstatic.com/xdata/images/xphoto/714x300/350960127.jpeg?k=e2732d40882766c8edd0001d7cca566de1d43af2d117b964f2e3ccf579d9a498&o=',
]

export function CarouselComponent() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imageData.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="carousel">            
              <div className="carosuel-left-div">
                <div>
                    <h2>Fly away to your dream holiday</h2>
                    <p>Get inspired, compare and book flights with more flexibility</p>
                    <button>Search for flights</button>
                </div>
                <div>
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />

                </div>
            </div>  
            <div className="imageDiv">               
               <img src={imageData[index]}/>             
            </div>
        </div>
    )
}  
