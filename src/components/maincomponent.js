import React, { Component } from 'react';
import Home from './homecomponent';
import Menu from './menucomponents';
import Contact from './contactcomponent';
import About from './aboutcomponent';
import DishDetail from './dishdetailcomponent';
import Header from './headercomponent';
import Footer from './footercomponent';
// withrouter require to configure my react components to connect to redux
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// connect is used to connect redux to main components
import { connect } from 'react-redux';
import { postFeedback, postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/actioncreater';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



// this will map redux store state into props and will become available to my component 
// this state i obtained here is the state of the redux store
const mapStateToProps = state => {
  return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (feedback) => dispatch(postFeedback(feedback))
});
// we dispatch the thunk fetchdishes



class Main extends Component {
  constructor(props) {
    super(props);

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  // when the main component get mounted in view by our react application
  // the fetchdishes will be called and then load it into my redux'store at 
  // the point and then it become available for my application
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render(){
    const HomePage= () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} 
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
        />
      );
    }

    const DishWithId = ({ match }) => {
        return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] }
              isLoading={this.props.dishes.isLoading}
              ErrMess={this.props.dishes.errMess}            
              comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
              commentsErrMess={this.props.comments.errMess}            
              postComment={this.props.postComment}  
          />
        );
    }

    const AboutusPage = () => {
      return(
        <About leaders={this.props.leaders} 
        />
      );
    }

    const Contactuspage = () => {
      return(
        <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                  postFeedback={this.props.postFeedback}
        />
      );
    }

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} className="page" timeout={300}>
          <Switch location={this.props.location}>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contactuspage} />
            <Route path="/aboutus" component={AboutusPage} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));











