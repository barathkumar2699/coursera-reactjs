import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    renderDish(dish){
        if(dish!=null){
          return (
            <Card className='col-12 col-md-5 m-1'>
                <CardImg   top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          );
        }
        else{
          return (
            <div></div>
          );
        }
    }

    formatDate( date ) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
    }

    renderComments(comments){
        if(comments!=null){
            let comment=comments.map((comments) => {
                return (
                    <li key={comments.id} >
                        <p>{comments.comment}</p>
                <p>--{comments.author},{this.formatDate(comments.date)}</p>
                    </li>
                );
            })
        
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comment}
                </ul>
            </div>
        )
        }
        else
        {
            return (
                <div></div>
            )
        }

    }

    render(){
        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        console.log(dish.comments)
        const commentItem = this.renderComments(dish.comments)
        return(
            <div className="container">
                <div className='row'>
                    {dishItem}
                    {commentItem}
                
                    
                </div>
            </div>
        )
    }
}

export default DishDetail;