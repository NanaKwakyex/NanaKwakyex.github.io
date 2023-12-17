// src/components/Projects.jsx
import React from 'react';
//import * as ProjPicsImages from '../images/projPics';

const Projects = () => {
  return (
    <header>
      <h2>My Projects</h2>
      <div class="grid">
        <div>
          <h5>EventBookie</h5>
          <img src='../images/projPics/' alt='eventbookie Homepage'></img>
          <br></br>
          <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="outline">Live Demo</a>
          <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="secondary outline">Code</a>
        </div>
        <br></br>
        <div>
          <h5>Sister's Braiding</h5>
          <img src='../images/projPics/' alt='Sister Braiding Homepage'></img>
          <br></br>
          <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="outline">Live Demo</a>
          <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="secondary outline">Code</a>
        </div>
      </div>
      <br></br>
      <div class="grid">
      <div>
        <h5>Tetris</h5>
        <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="outline">Live Demo</a>
        <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="secondary outline">Code</a>
        </div>
        <br></br>
        <div>
        <h5>More Smaller Projects</h5>
        <img src='../images/projPics/' alt='Smaller Projects Repository'></img>
        <br></br>
        <a href="https://github.com/NanaKwakyex/NanaKwakyex.github.io" role="button" class="secondary outline">Code</a>
        </div>
      </div>
      <br></br>
    </header>
  );
};

export default Projects;
