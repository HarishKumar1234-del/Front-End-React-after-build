import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, 
ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './loadingcomponent';
import { baseUrl } from '../shared/baseurl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >=len);

class CommentForm extends Component{
	constructor(props){
		super(props);

		this.state={
			isModalOpen: false
		};
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values) {
    	// this time this.toggleModal set value of isModalOpen from true to false
    	this.toggleModal();
        // console.log("Current State is: " + JSON.stringify(values));
        // alert("Current State is: " + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.yourname, values.message );
    }


    render(){
    	return(
    		<div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        	{/*row creating a problem for padding of left and right*/}
                        	<div className="form-group">
                        		<Label htmlfor="rating">Rating</Label>
                        		<Control.select model=".rating" id="rating" name="rating"
                        			className="form-control">
                        			<option>1</option>
                        			<option>2</option>
                        			<option>3</option>
                        			<option>4</option>
                        			<option>5</option>
                        		</Control.select>
                        	</div>
                            <div className="form-group">
                                <Label htmlfor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="Your Name" 
                                    placeholder="Your Name" className="form-control"
                                    validators = {{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlfor="message" >Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6" 
                                        className="form-control"/>
                            </div>
                            <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
    	);
    }
}





	function RenderComments({comments, postComment, dishId})
	{
		if(comments!=null)
		{
			const allcomments=comments.map((commentkey) =>{
				return(
					<Fade in>
						<div key={commentkey.id} className="mt-4">
							<p>{commentkey.comment}</p>
							<div>
								<p>
									-- {commentkey.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentkey.date)))}
								</p>
							</div>
						</div>
					</Fade>
				);
			});
			return(
				<div className="col-12 col-md-5 m-1">
					<h4> Comments </h4>
						<Stagger in>
							{allcomments}
						</Stagger>
    	                    <CommentForm dishId={dishId} postComment={postComment} />
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

	// stagger means information is popped one after another in the stage

	function RenderDish({dish})
	{
		return(
				<div className="col-12 col-md-5 m-1">
				<FadeTransform in
					transformProps={{
						exitTransform: 'scale(0.5) translateY(-50%)'
					}}>
						<Card>
							<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
			    		</Card>
			    	</FadeTransform>
				</div>
		);
	}



const DishDetail = (props) =>{
		if(props.isLoading) {
			return(
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			);
		}
		else if(props.errMess){
			return(
				<div className="container">
					<div className="row">
						<h4>{props.errMess}</h4>
					</div>
				</div>
			);
		}
		else if(props.dish != null) {
			return(
				<div className="container">

					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
							<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
							<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{props.dish.name}</h3>
							<hr />
						</div>
					</div>

					<div className="row">
				    	<RenderDish dish={props.dish} />
						<RenderComments  comments={props.comments} 
							postComment={props.postComment}
							dishId={props.dish.id} />
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