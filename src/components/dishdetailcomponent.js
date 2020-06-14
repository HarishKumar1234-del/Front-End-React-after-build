import React, { Component } from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, 
ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

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
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
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
                        <CommentForm />
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
						<RenderComments  comments={props.comments} />
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