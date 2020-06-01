import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



	function RenderComments({comments})
	{
		if(comments!=null)
		{
			const allcomments=comments.map((commentkey) =>{
				return(
					<div key={commentkey.id} className="mt-4">
						<p>{commentkey.comment}</p>
						<div>
							<p>
								-- {commentkey.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentkey.date)))}
							</p>
						</div>
					</div>
				);
			});
			return(
				<div className="col-12 col-md-5 m-1">
					<h4> Comments </h4>
						{allcomments}
				</div>
			);
		}
		else{
			return(
				<div>
					<h1>this is the </h1>
				</div>
			)
		}
	}
	function RenderDish({dish})
	{
		return(
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
			    	</Card>
				</div>
		);
	}



const DishDetail = (props) =>{

		if(props.dish != null) {
		var dish=props.dish;
			return(
				<div className="container">
					<div className="row">
				    	<RenderDish dish={dish} />
						<RenderComments  comments={dish.comments} />
			    	</div>
			    </div>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}

export default DishDetail;