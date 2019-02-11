import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render (){
        return (
            <div>
                <main role="main" id="about-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 about-images">
                                <img src="./assets/images/carousel/luis-alfonso-orellana-246919-unsplash.jpg" alt="By Luis Alfonso Orellana on Unsplash"/>
                                <img src="./assets/images/carousel/this-guy-458907-unsplash.jpg" alt="By This Guy on Unsplash"/>
                                <img src="./assets/images/carousel/evelyn-semenyuk-653626-unsplash.jpg" alt="By Evelyn Semenyuk on Unsplash"/>
                            </div>
                            <div className="col-8">
                                <h2 id="about-title">Why?</h2>
                                <p>
                                I love all kinds of art but I am saddened by the lack of it in our daily lives.
                                We see different forms of art every day undoubtedly but while technology, sound,
                                and text are intertwined with everything we do, usually in ways to grab attention,
                                it seems art is often meant to fade into the background providing a presence but
                                not a distraction.
                                <br /><br />
                                In some cases this may be warranted, we wouldn't want to distract drivers with a skyscraper
                                size Picasso. That being said, I have been to several places around the U.S. and the world
                                that have incorporated art into the cityscape flawlessly. Most likely this artistic expression
                                was prohibitted by local laws but either through a lack of enforcement or perhaps an appreciation
                                by the local community the art remained and became a part of that community's identity.
                                <br /><br />
                                This street art can be controversial as it is in a public forum, many may not like the art
                                itself or disagree with the message it is trying to communicate but that is exactly the point.
                                Art is a personal expression, an individual communicating something about them or their community,
                                in a form beyond words, only a few may understand, but may compel others to attempt to understand
                                a different perspective from their own. When confronted with art we personally don't like or understand
                                we must acknowledge that many of the greatest artists in history succeeded very little in their
                                lifetimes and so to contain art to simply galleries focused on what's popular and profitable would
                                be to deprive the world of the next Van Gogh, Vermeer, Gauguin.
                                <br /><br />
                                Now, I understand with the technology today one can view countless works of art and follow artists
                                throughout their journey without ever leaving one's home. I personally am a huge fan of the power
                                of web to connect kindred spirits; artists and those that love their art, no matter how few or how
                                far apart. There is something magical though about walking through one's neighborhood or city and
                                feeling your surroundings coming alive...
                                </p>
                                 <ul>
                                    <li>A musician playing some Jazz on Bourbon Street in New Orleans.</li>
                                    <li>Artists selling landscapes or portaitures in Lima, Peru.</li>
                                    <li>An impromptu group of dancers performing on Long Beach boardwalk.</li>
                                    <li>A wall size mural to commemorate the heroes of the local community?</li>
                                </ul>
                                <h2>How?</h2>
                                <p>
                                Artisticity's aim is connect all those artists out there that want to leave a mark on their community
                                or city with local property owners that want to encourage artistic expression and bring some color,
                                some fun, some passion to an otherwise dull structure or landscape.
                                <br /><br />
                                Initially, this site will only provide a place to connect, it won't provide any guidance on how
                                these connections should proceed after introduction. Also this site is not meant to encourage free
                                work by artists or no input by patrons. I leave it to the individuals involved on figuring out
                                what works best for them but please keep in mind that sometimes a little compromise is necessary
                                to achieve a greater shared goal.
                                <br /><br />
                                I will be listening to user feedback to improve the site and determine future features so please
                                contact me should you have any suggestions.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default About;
