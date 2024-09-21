import { useState } from "react";

export function HeaderComponent(){
    const rightOptions = [
        { type: 'text', content: 'INR' },
        { type: 'icon', content: 'fa-solid fa-question' },
        { type: 'text', content: 'List your property' },
        { type: 'button', content: 'Register' },
        { type: 'button', content: 'Sign In' }
    ];
    const navItems = [
        { name: 'Stays', icon: '' },
        { name: 'Flights', icon: 'fa-solid fa-plane' },
        { name: 'Flight + hotel', icon: 'fa-solid fa-hotel' },
        { name: 'Car rentals', icon: 'fa-solid fa-car' },
        { name: 'Attractions', icon: '' },
        { name: 'Airport taxis', icon: '' }
    ];
    const[inputValue, setInputValue] = useState('')

    const handleSearch = (event) => {
        setInputValue(event.target.value)
        setSearchTerm(event.target.value)
    }
    return(
       <>
         <div className="header-container">
            <header>
                <div className="left-div">
                    <h2>Booking.com</h2>
                </div>
                <div className="right-div">
                {rightOptions.map((item, index) => (
                            item.type === 'text' ? (
                                <span key={index}>{item.content}</span>
                            ) : item.type === 'icon' ? (
                                <span key={index}><i className={item.content}></i></span>
                            ) : (
                                <button key={index}>{item.content}</button>
                            )
                        ))}
                </div>
            </header>
            <nav>
                <ul>
                {navItems.map((item, index) => (
                            <li key={index}>
                                {item.icon && <span><i className={item.icon}></i></span>}
                                {item.name}
                            </li>
                        ))}              
                </ul>            
            </nav>
            <h1>Find your next stay</h1>
            <p>Search low prices on hotels, homes and much more...</p> 
            <div className="searchbar-div">
                <input type="search" placeholder="Where are you going" value={inputValue} onChange={handleSearch}/>
                <input type="date" placeholder="Check-in date - Check-out date"/>
                <input type="text" placeholder="adult . children . room"/>
                <button>Search</button>
            </div>
         </div> 
       </>
    )
} 