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
import { addComment } from '../redux/actioncreater';

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

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});



class Main extends Component {
  constructor(props) {
    super(props);

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render(){
    const HomePage= () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({ match }) => {
        return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] }
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}  
          />

        );
    }



  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));











