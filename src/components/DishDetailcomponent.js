import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
    import { Link } from 'react-router-dom';





    function RenderDish({dish}){
        if(dish!=null){
          return (
            <Card className='' >
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
            <div className=''>
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

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
    }


export default DishDetail;