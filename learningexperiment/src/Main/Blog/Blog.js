import React, { Component } from 'react';
import StructPosts from './StructPosts.js';
import UpperBlog from './UpperBlog.js';




class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }

    render() {
        return (
            <div>
                <div>
                    <div className="site-section ">
                    <UpperBlog/>
                    <StructPosts/>
                    
                    </div>
                </div>
                </div>
            );
    }
}

export default Blog;
