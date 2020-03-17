import React from "react"
import PropTypes from "prop-types"

// import Moment from 'react-moment';
import Timestamp from 'react-timestamp';

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
              <Timestamp relative date={this.props.created_at} />,
              &nbsp;
              last updated: <Timestamp relative date={this.props.updated_at} />,
              &nbsp;
            </small>  
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount(){
    var self = this;
    setInterval(function() { self.forceUpdate() }, 1000); //Esta funcion actualiza cada 5 minutos el estado de; render()
  }

  componentWillUnmount(){
    // var self = this;
    if (this._timer){
      clearInterval(this._timer);
      this._timer = null;
    }
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
