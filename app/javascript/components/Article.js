import React from "react"
import PropTypes from "prop-types"

import Moment from 'react-moment';

class Article extends React.Component {
  
  render () {
    var created_at = (new Date(this.props.created_at)).getTime();
    var updated_at = (new Date(this.props.updated_at)).getTime();
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small> 
              Created by: {this.props.author},
              &nbsp;
              <Moment fromNow>{created_at}</Moment>,
              &nbsp;
              last updated: <Moment fromNow>{updated_at}</Moment>
            </small>  
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article
