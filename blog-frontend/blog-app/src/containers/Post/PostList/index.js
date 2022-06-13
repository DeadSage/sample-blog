import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import _ from "lodash";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Button from 'react-bootstrap/Button';
import CircularProgress from '@mui/material/CircularProgress';

import ResourceCreateModal from '../PostCreateModal'
import { makeSelectResourcesList, makeSelectLoading, makeSelectIsOpenModal } from '../selectors'
import { getResourcesRequest, setOpenModal } from '../actions'
import './styles.scss'

const COLUMNS = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        sortable: true,
    },
    {
        field: 'title',
        headerName: 'Title name',
        width: 150,
        sortable: false,
    },
    {
        field: 'content',
        headerName: 'Content',
        width: 150,
        sortable: false,
    },
    {
        field: 'author',
        headerName: 'Author',
        width: 150,
        sortable: false,
    },
]

class PostList extends React.Component {

    openModal = () => {
        this.props.setOpenModal()
    }

    componentDidMount() {
        this.props.getPostsRequest()
    }

    render() {
        const { posts, loading, isOpenModal } = this.props
        if (loading || !_.isArray(posts)) {
            return <CircularProgress/>
        }
        const renderedPosts = posts.map((item) => {
            item.author = item['author']['email'];
            return item;
        });

        return (
            <div className={'table-container'}>
                <Button className={'create-post-btn'} onClick={this.openModal}>
                    Create post
                </Button>
                <DataGrid
                    rows={renderedPosts}
                    columns={COLUMNS}
                    rowsPerPageOptions={[]}
                    hideFooterPagination={true}
                />
                {isOpenModal && <PostCreateModal/>}
            </div>
        );
    };
}


PostList.propTypes = {
    navigate: PropTypes.any,
    getPostsRequest: PropTypes.func,
    setOpenModal: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
    posts: makeSelectPostsList(),
    loading: makeSelectLoading(),
    isOpenModal: makeSelectIsOpenModal(),
});


const mapDispatchToProps = {
    getPostsRequest,
    setOpenModal
};


const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);


export default compose(
    withConnect,
)(PostList);
