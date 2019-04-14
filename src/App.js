import React from 'react';
import './App.css';
import SmartQuestionList from "./view/SmartQuestionList";
import {HashRouter, Switch, Route} from "react-router-dom";
import SmartCreateQuestion from "./view/SmartCreateQuestion";
import SmartQuestionDetails from "./view/SmartQuestionDetails";
import SmartFindByTitleQuestion from "./view/SmartFindByTitleQuestion";
import SmartFindByTagQuestion from "./view/SmartFindByTagQuestion";


/* use {} becasue i pass a varaible */
/*   <QuestionList questions={(questions)} /> daca vreau sa iau din mem harcodat*/

/*
const questions = [{
  title: "Mancare preferata",
  text: "Scrijele bine-inteles"
}, {
  title: "Carte preferata",
  text: "Pizza"
}];
*/


const App = () => (
    <div className = "App">
        <HashRouter >
            <Switch>
              <Route exact = {true} component={SmartQuestionList} path = "/" />
              <Route exact = {true} component={SmartCreateQuestion} path = "/create-question" />
              <Route exact = {true} component={SmartFindByTitleQuestion} path = "/search-question-title" />
              <Route exact = {true} component={SmartFindByTagQuestion} path = "/search-question-tag" />
              <Route exact = {true} component={SmartQuestionDetails} path = "/questions-details/:index" />


            </Switch>



        </HashRouter>


    </div>
);

export default App;
