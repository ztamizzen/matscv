import React from 'react';
import './Tech.css';
export default function Tech() {
    return (
        <>
            <h1>Tech, in order of interest</h1>
            <dl className="tech">
                <dt>React</dt>
                <dd>On and off since 2016</dd>
                <dt>Vue</dt>
                <dd>Full on during 2018 and 2019</dd>
                <dt>Rust</dt>
                <dd>On and off since 2016. <q cite="https://open.spotify.com/track/0yjhcB1fBuZ9SN7nn4mVB2?si=jZ7OXXq8S0W-mk-ZuQ5MQg">It's better to burn out, 'cause Rust never sleeps.</q></dd>
                <dt>Vuex</dt>
                <dd>Mostly on my own, since 2018</dd>
                <dt>Redux</dt>
                <dd>Mostly on my own, since 2017</dd>
                <dt>Electron</dt>
                <dd>Quite often since 2017</dd>
                <dt>GraphQL</dt>
                <dd>Started learning 2019</dd>
                <dt>Docker</dt>
                <dd>On and off since 2017</dd>
                <dt>Java</dt>
                <dd>On and off since 2003, mostly off.</dd>
                <dt>Maven</dt>
                <dd>On and off since 2011</dd>
                <dt>Ruby</dt>
                <dd>Since 2005, includes RubyOnRails</dd>
            </dl>
            <h2>Things any front end developer should know</h2>
            <h3>I obviously do. Anything else would be embarrasing.</h3>
            <dl className="tech">
                <dt>JavaScript</dt>
                <dd>Since 1998. Yes, I'm that old.</dd>
                <dt>HTML5</dt>
                <dd>Since 2014. 28th Oct 2014 to be exact. <a href="https://sv.wikipedia.org/wiki/HTML5">Wikipedia</a>. It also has the best logo of all the specs, by far.</dd>
                <dt>CSS</dt>
                <dd>Since browsers first implemented it</dd>
                <dt>DOM</dt>
                <dd>Since 1998</dd>
                <dt>HTML</dt>
                <dd>Since 1998</dd>
            </dl>
        </>
    );
}