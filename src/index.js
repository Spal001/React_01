import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const img1="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"


ReactDOM.render(
  <>
 <div class="heading">
 <h1 class="title"> Butterflies </h1>
 <h3 contentEditable="true">Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, 
     which also includes moths. </h3>
 </div>
 <img class="img" src={img1} />

 <h1 class="note"> Write Short Notes On Butterflies. </h1>
 <p contentEditable="true"> Write from here... </p>
 <button type="button" class="btn">Submit</button>
 </>,
  document.getElementById('root')
);
reportWebVitals();