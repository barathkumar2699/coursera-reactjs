import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';





    function RenderDish({dish}){
        if(dish!=null){
          return (
            <Card className='col-12 col-md-5 m-1' >
                <CardImg top src={dish.image} alt={dish.name} />
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

    function formatDate( date ) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
    }

    function RenderComments({comments}){
        if(comments!=null){
            let comment=comments.map((comments) => {
                return (
                    <li key={comments.id} >
                        <p>{comments.comment}</p>
                <p>--{comments.author},{formatDate(comments.date)}</p>
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

    const  DishDetail = (props) => {
        console.log('DishDetail component did render')
        const dish = props.dish;
        if (dish == null) {
            return (<div></div>)
        }

        return(
            <div className="container">
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    }


export default DishDetail;