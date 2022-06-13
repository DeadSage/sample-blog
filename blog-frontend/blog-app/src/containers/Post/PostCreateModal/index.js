import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Form from 'react-bootstrap/Form'

import { makeSelectIsOpenModal } from '../selectors'
import {setCloseModal, createPostsRequest, getPostsRequest} from '../actions'

import { get } from '../../../api/utils';


class PostCreateModal extends React.Component {
    constructor(props) {
        super(props);
        // TODO: refactor: fetch this list as default from server
        this.state = {
            title: '',
            content: '',
            position: '',
            author: [],
        };
    }

    componentDidMount() {
      const author_promise = get('api/v1/users/', true);
      author_promise.then(result => {
        this.setState({author: result.data})
      });

    };

    closeModal = () => {
        this.props.setCloseModal()
    }

    validateForm = () => {
      return !this.titleIsInvalid() &&
            !this.contentIsInvalid() &&
            !this.authorIsInvalid()
    }

    titleIsInvalid = () => {
        const {title} = this.state
        return title.length === 0
    }

    contentIsInvalid = () => {
        const {content} = this.state
        return content.length < 2
    }


    authorIsInvalid = () => {
        const {author} = this.state
        return author === '-' || author === ''
    }

    renderOkButton = () => {
        const { loading } = this.state
        if (!loading) {
            return (
                <Button onClick={this.createPost} disabled={!this.validateForm()}>
                    Create
                </Button>
            )
        } else {
            return (
                <Button disabled={true}>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Create...</span>
                </Button>
            )
        }
    }

    createPost = () => {
        const {title, content, author} = this.state
        const data = {
            title: title,
            content: content,
            author: author,
        }
        this.setState({loading: true})
        return new Promise(resolve => {
            const handleSuccess = () => {
                resolve();
                this.setState({loading: false})
                this.props.setCloseModal()
                this.props.getPostsRequest()
            };
            const handleErrors = () => {
                this.setState({loading: false})
                this.props.setCloseModal()
            };
            this.props.createPostsRequest({data: data, handleSuccess, handleErrors})
        });
    }

    render() {
        const { isOpenModal } = this.props
        const {
            title,
            content,
            author,
            loading
        } = this.state

        let authorItems = this.state.author.map(author =>
            <option key={author.id} value={author.id}>{author.email}</option>
        );

        return (
            <Modal show={isOpenModal}>
                <Modal.Header>
                    <Modal.Title> Create post </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                      <Form.Group as={Row} className="mb-2">
                        <Form.Label column sm={4}> Title </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            required
                            name="Title"
                            value={title}
                            isInvalid={this.titleIsInvalid()}
                            placeholder="Title"
                            onChange={this.setValues}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-2">
                        <Form.Label column sm={4}> Content </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            required
                            name="content"
                            value={content}
                            isInvalid={this.contentIsInvalid()}
                            placeholder="Content (at least 2 chars)"
                            onChange={this.setValues}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-2">
                        <Form.Label column sm={4}>
                          Author
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            required
                            name="author"
                            value={author}
                            isInvalid={this.authorIsInvalid()}
                            placeholder="author"
                            onChange={this.setValues}
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal} variant="danger" disabled={loading}>
                        Close
                    </Button>
                    {this.renderOkButton()}
                </Modal.Footer>
            </Modal>
        )
    }
}


PostCreateModal.propTypes = {
    setCloseModal: PropTypes.func,
    getPostsRequest: PropTypes.func,
    createPostsRequest: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
    isOpenModal: makeSelectIsOpenModal(),
});


const mapDispatchToProps = {
    setCloseModal,
    createPostsRequest,
    getPostsRequest
};


const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);


export default compose(
    withConnect,
)(PostCreateModal);
