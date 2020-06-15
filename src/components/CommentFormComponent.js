import React, { Component } from 'react';
import { 
    Button, Row, Col, Label, Modal ,ModalHeader,ModalBody,} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handleSubmit(values) {
        console.log("current state:", values);
        alert("current state:" + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-edit fa-lg"></span>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                  <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row  className="form-group">
                        <Label for="rating" md={12}>Rating</Label>
                        <Col  md={12}>
                            <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                            <option value="" selected disabled>Choose here</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row  className="form-group">
                        <Label for="name" md={12}>Your Name</Label>
                        <Col  md={12}>
                            <Control.text model=".author" id="author" name="author" className="form-control"
                            placeholder="Your Name"
                            validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }} />
                        <Errors className="text-danger" model=".author" show="touched"
                         messages={{ required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 charaters or less' }} />
                         </Col>
                    </Row>
                    <Row  className="form-group">
                        <Label for="comment" md={12}>Comment</Label>
                        <Col  md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment" className="form-control"
                             rows="6"  />
                             <Errors className="text-danger" model=".comment" show="touched"
                              messages={{ required: 'Required' }} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                        </Col>
                     </Row>
                        </LocalForm>
                  </ModalBody>
                   
                </Modal>
            </div>
        )
    }
}

export default CommentForm;