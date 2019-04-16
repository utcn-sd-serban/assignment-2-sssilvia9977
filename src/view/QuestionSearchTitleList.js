import React from "react";
import model from "../model/model"
const QuestionSearchTitleList = ({ questionsByTitle,onViewDetails }) => (
    <div >


        <section className="hero is-fullheight is-primary is-bold">
            <div className="hero-body">

                <div className="container is-centered">


                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">


                            <p className="title is-1">Question</p>

                            <p className="title is-2 is-spaced">Title:</p>
                            <span className="subtitle is-3"> { questionsByTitle.title  }</span>
                            <br />

                            <p className="title is-2 is-spaced">Text:</p>
                            <span className="subtitle is-3"> { questionsByTitle.text }</span>
                            <br />
                            <br />

                            <p className="title is-2 is-spaced">Creation date:</p>
                            <span className="subtitle is-3"> { questionsByTitle.creationDate}</span>
                            <br />
                            <br />



                            <div>

                                <div className="tags">
                                    {
                                        questionsByTitle.tags.map((tag, index) => (
                                            <li key = {index}>
                                                {

                                                    <span className="tag is-warning is-large" > {tag}  </span>

                                                }
                                            </li>
                                        ))
                                    }


                                </div>



                            </div>




                        </div>
                    </div>

                </div>
            </div>



        </section>










    </div>




);

export default QuestionSearchTitleList;

/*

 <button onClick={ () => onViewDetails(0)} >Apasa-l!</button>



 */