import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import ProjectSite from './components/ProjectSite/ProjectSite.jsx';
import projectData from './projectData.js';


export default function App() {

  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/clintri">
            <ProjectSite title={projectData.clintri.title} secondaryTitle={projectData.clintri.secondaryTitle} description={projectData.clintri.description} img={projectData.clintri.img} programsUsed={projectData.clintri.programsUsed} linkWebsite={projectData.clintri.linkWebsite} linkGithub={projectData.clintri.linkGit} />
          </Route>

          <Route path="/studyguide-coach">
            <ProjectSite title={projectData.studyguidecoach.title} secondaryTitle={projectData.studyguidecoach.secondaryTitle} description={projectData.clintri.description} img={projectData.studyguidecoach.img} programsUsed={projectData.studyguidecoach.programsUsed} linkWebsite={projectData.studyguidecoach.linkWebsite} />
          </Route>

          <Route path="/gametrendanalytics">
            <ProjectSite title={projectData.gametrendanalytics.title} description={projectData.gametrendanalytics.description} img={projectData.gametrendanalytics.img} programsUsed={projectData.gametrendanalytics.programsUsed} linkGithub={projectData.gametrendanalytics.linkGit} />
          </Route>

          <Route path="/groupvisualizationtool">
            <ProjectSite title={projectData.groupvisualizationtool.title} description={projectData.groupvisualizationtool.description} img={projectData.groupvisualizationtool.img} programsUsed={projectData.groupvisualizationtool.programsUsed} linkWebsite={projectData.groupvisualizationtool.linkWebsite} linkGithub={projectData.groupvisualizationtool.linkGit} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}