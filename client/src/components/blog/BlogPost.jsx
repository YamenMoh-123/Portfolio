import React from 'react';
import "./blogStyle.css";

function BlogPost(props) {
	var curClass = 'R'
	if(props.index %2 == 0){
		var curClass = 'R'
	}
	else{
		var curClass = 'L'
	}
	
    var curId = 0;
    const input = props.value;
    var time = (input.createdAt);
    if (typeof time !== 'undefined'){
        time = time.slice(0,10);
    }
    if (typeof props.value !== 'undefined'){
        curId = props.value._id;
        
    }

     function handleDelete(){
        props.onDelete(curId);
        
    }
	function handleExpand(){
		
		props.onExpand(curId);
	}

	function handleEdit(){
		props.onEdit(curId);
	}


  return (
	
    <div class = "blogPost">
    <section class="back">
	<div class="container py-4">
		
		<article className= {`postcard dark blue position-${curClass}`}>
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title"  onClick = {handleExpand} />
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
					<li class="tag__item" onClick = {handleDelete}>
                        <i class="fas fa-thin fa-trash mr-2"></i>Delete
                    </li>
                
					<li class="tag__item play blue" onClick = {handleEdit}>
		                <i class="fas fa-pen-to-square mr-2"></i>Edit
					</li>
				</ul>
			</div>
		</article>

		
	</div>
</section>

</div>
  )
  
}

export default BlogPost