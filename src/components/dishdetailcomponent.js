import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component{
	constructor(props){
		super(props);

		this.state={

		};
	}
	

	componentDidMount() {
		console.log("DishDetail Component componentDidMount is invoked");
	}

	componentDidUpdate() {
		console.log("DishDetail Component componentDidUpdate is invoked");
	}


	renderComments(comments)
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
	renderDish(dish)
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
	render(){

		console.log("DishDetail Component render is invoked");

		if(this.props.dish != null) {
		var dish=this.props.dish;
			return(
				<div className="container">
					<div className="row">
				    	{this.renderDish(dish)}
						{this.renderComments(dish.comments)}
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

}

export default DishDetail;