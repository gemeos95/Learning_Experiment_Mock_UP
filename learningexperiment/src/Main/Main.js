import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Blog from './Blog/Blog.js';
import Events from './Events/Events.js';
import Forum from './Forum/Forum.js';
import References from './References/References.js';
import aboutUs from './aboutUs/aboutUs.js';
import contactUs from './contactUs/contactUs.js';


class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/events' component={Events}/>
                        <Route path='/forum' component={Forum}/>
                        <Route path='/references' component={References}/>
                        <Route path='/aboutus' component={aboutUs}/>
                        <Route path='/contactus' component={contactUs}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;