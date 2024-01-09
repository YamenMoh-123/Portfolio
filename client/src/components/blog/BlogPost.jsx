import React from 'react';
import "./blogStyle.css";
import axios from "axios";

function BlogPost(props) {

    var curId = 0;
    const input = props.value;
    var time = (input.createdAt);
    if (typeof time !== 'undefined'){
        time = time.slice(0,10);
    }
    if (typeof props.value !== 'undefined'){
        curId = props.value._id;
        
    }
    
     function handleClick(){
        //{console.log(curId)}
        props.onDelete(curId);
        
    }


  return (
    <div class = "blogPost">
    <section class="dark">
	<div class="container py-4">
		{/*<h1 class="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1>*/}

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue">{input.title}<a href="#"></a></h1>
				<div class="postcard__subtitle small">
					<time datetime="{2020-05-25 12:00:00}">
						<i class="fas fa-calendar-alt mr-2"></i> {time}
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{input.content}</div>
				<ul class="postcard__tagbox">
					<li class="tag__item" onClick = {handleClick}>
                        <i class="fas fa-thin fa-trash mr-2"></i>Delete
                    </li>
                
					<li class="tag__item play blue">
		                <i class="fas fa-pen-to-square mr-2"></i>Edit
					</li>
				</ul>
			</div>
		</article>

        {/*
		<article class="postcard dark red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#">Podcast Title</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play red">
						<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
  </article>(*/}
		
		
	</div>
</section>

</div>
  )
  
}

export default BlogPost