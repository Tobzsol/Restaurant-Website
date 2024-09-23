import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app_wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio expedita, pariatur incidunt illo aliquid similique ab molestiae quos harum, recusandae, eveniet at. Exercitationem molestias vel alias quidem deleniti nobis.</p>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat recusandae necessitatibus officiis, iste neque eveniet ex optio cum provident dicta atque quisquam exercitationem libero accusamus eaque aspernatur dolorem ab.</p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
