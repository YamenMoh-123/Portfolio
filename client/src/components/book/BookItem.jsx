import React from 'react'


function BookItem(props) {
  const imageURL = props.value.image;
  const title = props.value.title;
  const score = props.value.score;

  return (

  <div class="card col-lg-12 mx-2">
    <img src={imageURL} class="card-img-top" style = {{height: "225px"}} alt="..."></img>
    <div class="card-body text-bg-dark">
    <p class="card-text ">{title}</p>
    <p class="card-text">Rating: {score}</p>
  </div>
</div>

    
  )
}

export default BookItem