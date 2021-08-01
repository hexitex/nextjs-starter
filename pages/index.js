import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import React, { useState, useEffect } from 'react';

import { projects } from '../utils/projectsData';

const [data, setData] = useState('');
const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      {projects.map((project) => {
     
        const Icon = projectIcons[project.id];
    
        return <SmallCard key={project.id} Icon={Icon} title={project.name +' '+ data} slug={project.slug} />;
      })}
    </div>
    
  </div>
);




  useEffect=(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

export default Home;
