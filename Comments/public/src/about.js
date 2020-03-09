import React, { Fragment } from 'react';


const about = (props) => {
    return (
        <div className="about" id="aboutID">
            {/*<img src="./components/assets/aboutLogo.svg" alt="about_me_Icon" height="10" width="10" />*/}
            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11C14.3137 11 17 8.53757 17 5.5C17 2.46243 14.3137 0 11 0C7.68629 0 5 2.46243 5 5.5C5 8.53757 7.68629 11 11 11Z" fill="#C4C4C4" />
                <path d="M11 30C17.0751 30 22 26.4183 22 22C22 17.5817 17.0751 14 11 14C4.92487 14 0 17.5817 0 22C0 26.4183 4.92487 30 11 30Z" fill="#C4C4C4" />
            </svg>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default about;