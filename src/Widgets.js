import React from 'react'
import "./Widgets.css";


function Widgets() {
    return (
        <div className="widgets">
           <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fleomessi&tabs=timeline&width=200&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="185" 
            height="1500" 
            style={{border:"none", overflow:"hidden" } }
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow=" encrypted-media;">
            
           </iframe>
           
                
           

            
        </div>
    )
}

export default Widgets
