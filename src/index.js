import React  from "react";
import ReactDom from "react-dom";
import './index.css'
// function Greeting(){
//     return <h4>this my first entry point</h4>
// }

const BookList = [{

    img:"https://images-eu.ssl-images-amazon.com/images/I/41HpU3PBslS._AC_SX184_.jpg",
    title:'The Illuminated',
    author:'Anindita Ghose',
    price:'234Rs',
    rating:120

},{
  img:"https://images-eu.ssl-images-amazon.com/images/I/51ztXlYS2kS._AC_SX184_.jpg",
  title:'SONG OF DRAUPADISONG OF DRAUPADI',
  author:'Ira Mukhoty',
  price:'450Rs',
  rating:53

},{
img:"https://images-eu.ssl-images-amazon.com/images/I/51KEpmJ8gYL._AC_SX184_.jpg",
title:"Timelines from Indian History",
author:"Anurima Chanda",
price:"639Rs",
rating:45

},{
img:"https://images-eu.ssl-images-amazon.com/images/I/51rLaN32HjS._AC_SX184_.jpg",
title:"Funeral Nights",
author:"Kynpham Sing Nongkynrih",
price:"707Rs",
rating:56
}];

const  Greeting = ()=>{

    return( 
        <>
        <article className="booklist">
        
              {
                BookList.map(b =>
                  <Books book={b}></Books> 
                )
              }
       
         
         </article>
         </>
         );

   
}

const Books = (props)=>{
    
    return (
    
        <article className="book">
         <img src={props.book.img} />
         <h3>{props.book.title}</h3>
         <h4>{props.book.author}</h4>
         <h4 id="price">{props.book.price}</h4>
         <Rating className="rating" no_rat = {props.book.rating}></Rating>
         <button type="button">Buy Now</button>
         <button type="button" id="add_cart">Add</button>
        </article>
    
    );
}


const Rating = ({no_rat}) => {
    console.log(no_rat)
return (
<>
<div className="rating_div">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star unchecked"></span>
<span class="fa fa-star unchecked"></span>
<p>({no_rat})</p>
</div>
</>
);
}

ReactDom.render(<Greeting/>, document.getElementById("root"));