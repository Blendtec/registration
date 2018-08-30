import React from 'react';

const successPage = (props) => {
	return (
		<div>

<div appTranslate className="registration-thank-you">
<div>
    <h3 className="registration-thank-you--heading">{props.t('YOU_ARE_OFFICIAL')}</h3>

    <p className="registration-thank-you--para">
        {props.t('SUCCESS_USEFUL')}
    </p>
    <div className="registration-thank-you--social-box">

<ul className="social-icons">
    <li className="social-icon">
        <a href="http://www.facebook.com/Blendtec">
            <span className="icon">
<svg  style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<path  d="M512,0C229.2,0,0,229.3,0,512c0,282.8,229.2,512,512,512s512-229.2,512-512C1024,229.3,794.8,0,512,0z
     M647.5,509.8h-88.6c0,141.7,0,316.2,0,316.2H427.5c0,0,0-172.7,0-316.2H365V398.2h62.5v-72.3c0-51.8,24.6-132.6,132.6-132.6
    l97.3,0.4v108.4c0,0-59.2,0-70.7,0c-11.5,0-27.8,5.8-27.8,30.4v65.7H659L647.5,509.8z"/>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="https://twitter.com/Blendtec">
            <span className="icon icon_circle_twitter">
<svg  style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<path  d="M512,0C229.2,0,0,229.3,0,512c0,282.8,229.2,512,512,512s512-229.2,512-512C1024,229.3,794.8,0,512,0z
     M649.6,810.2c-21.1,0-137.9-2.8-167.7-2.8C452,807.5,296.6,759,296.6,588c0-30.5,0-61.1-0.1-91.6c-0.1-28.4-0.7-56.8-0.8-85
    c0-8.2-0.1-16.5-0.1-24.7c-0.2-43.1-3.8-91.6,10-133c10.6-31.6,35.7-44.2,66.6-44.2c74.7,0,79.7,76.2,79.9,152.7h216
    c34.2,0,59.7,34.7,59.7,87.8c0,53-55.3,64.9-84.3,64.9H449.7c-1,32.5-2,58.9-2,75c0,33.8,13.2,70.4,95.7,70.4h116
    c29,0,71.9,21.9,71.9,83.2C731.3,804.6,670.7,810.2,649.6,810.2z"/>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="https://www.pinterest.com/Blendtec">
            <span className="icon icon_circle_pinterest">
<svg  style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<g>
    <path  d="M512,0C229.3,0,0,229.2,0,512C0,721.6,126.1,901.8,306.5,981c-1.4-35.8-0.3-78.7,8.9-117.6
        c9.8-41.6,65.9-279,65.9-279s-16.4-32.7-16.4-81c0-75.9,44-132.5,98.7-132.5c46.6,0,69.1,35,69.1,76.9
        c0,46.8-29.9,116.8-45.2,181.7c-12.8,54.3,27.2,98.6,80.8,98.6c97,0,162.3-124.6,162.3-272.2c0-112.2-75.6-196.2-213-196.2
        c-155.3,0-252.1,115.8-252.1,245.2c0,44.6,13.2,76.1,33.8,100.4c9.5,11.2,10.8,15.7,7.4,28.5c-2.4,9.4-8.1,32.1-10.4,41.1
        c-3.4,13-13.9,17.6-25.6,12.8c-71.5-29.2-104.9-107.6-104.9-195.6c0-145.4,122.7-319.9,365.9-319.9
        c195.5,0,324.1,141.5,324.1,293.3c0,200.8-111.7,350.9-276.3,350.9c-55.3,0-107.3-29.9-125.1-63.8c0,0-29.7,118-36,140.7
        c-10.9,39.5-32.1,78.9-51.5,109.7c46.1,13.6,94.7,21,145.1,21c282.7,0,512-229.2,512-512C1024,229.2,794.7,0,512,0z"/>
</g>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="http://www.youtube.com/blendteconsumer">
            <span className="icon icon_circle_youtube">
<svg  style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<g>
    <polygon  points="293.4,555.1 330.5,555.1 330.5,739.2 366.3,739.2 366.3,555.1 403.3,555.1 403.3,523.7
        293.4,523.7     "/>
    <path  d="M513.4,402.1c4.9,0,8.7-1.3,11.6-3.9c2.9-2.7,4.3-6.4,4.3-11.1v-95.4c0-3.8-1.5-6.9-4.4-9.3
        c-2.9-2.4-6.7-3.6-11.5-3.6c-4.4,0-7.9,1.2-10.7,3.6c-2.7,2.3-4.1,5.4-4.1,9.3V387c0,4.8,1.3,8.5,3.8,11.1
        C505,400.8,508.7,402.1,513.4,402.1z"/>
    <path  d="M592.4,578.3c-5,0-9.8,1.3-14.7,3.8c-4.8,2.5-9.3,6.3-13.6,11.1v-69.4H532v215.5h32.1v-12.2
        c4.1,4.9,8.7,8.5,13.6,10.8c4.8,2.3,10.4,3.5,16.6,3.5c9.4,0,16.7-3,21.6-9c5-6.1,7.5-14.7,7.5-25.9v-88.2c0-13-2.6-22.9-8-29.7
        C610.1,581.7,602.4,578.3,592.4,578.3z M590.6,702.1c0,5.1-0.9,8.7-2.7,11c-1.8,2.3-4.7,3.4-8.6,3.4c-2.7,0-5.2-0.6-7.7-1.7
        c-2.4-1.1-5-3-7.5-5.6v-99c2.2-2.2,4.3-3.9,6.5-4.9c2.2-1.1,4.5-1.6,6.7-1.6c4.3,0,7.6,1.4,9.9,4.1c2.2,2.8,3.3,6.9,3.3,12.3V702.1
        z"/>
    <path  d="M476.3,701.1c-3,3.4-6.3,6.2-9.8,8.5c-3.6,2.2-6.6,3.3-8.9,3.3c-3,0-5.2-0.8-6.5-2.5c-1.3-1.7-2-4.4-2-8.1
        v-122h-31.8v133c0,9.5,1.9,16.5,5.6,21.3c3.8,4.7,9.2,7.1,16.6,7.1c6,0,12.1-1.6,18.5-5c6.4-3.5,12.4-8.3,18.3-14.7v17.4h31.8v-159
        h-31.8V701.1z"/>
    <path  d="M512,0C229.2,0,0,229.2,0,512c0,282.8,229.2,512,512,512s512-229.2,512-512C1024,229.2,794.8,0,512,0z
         M594.7,252.9h35.7v134.3c0,4.2,0.8,7.1,2.3,9c1.5,1.9,3.9,2.8,7.3,2.8c2.6,0,5.9-1.3,10-3.7c4-2.5,7.7-5.6,11-9.5V252.9h35.8V428
        H661v-19.3c-6.5,7.1-13.4,12.6-20.6,16.3c-7.1,3.7-14,5.6-20.8,5.6c-8.3,0-14.5-2.6-18.7-7.9c-4.2-5.2-6.3-13-6.3-23.5V252.9z
         M461.8,292.9c0-13.5,4.8-24.3,14.4-32.4c9.6-8,22.6-12,38.8-12c14.8,0,26.9,4.3,36.4,12.7c9.4,8.4,14.1,19.4,14.1,32.8v90.4
        c0,15-4.6,26.8-13.9,35.2c-9.3,8.5-22.1,12.8-38.3,12.8c-15.6,0-28.2-4.4-37.6-13.1c-9.4-8.9-14.1-20.7-14.1-35.6V292.9z
         M364.4,190.6l26.2,94.9h2.5l24.9-94.9h40.9l-46.9,138.9V428h-40.3v-94.1l-48-143.3H364.4z M833,690.3
        c0,63.3-51.4,114.8-114.7,114.8H319.6c-63.4,0-114.8-51.4-114.8-114.8v-92.3c0-63.4,51.4-114.8,114.8-114.8h398.7
        c63.4,0,114.7,51.4,114.7,114.8V690.3z"/>
    <path  d="M688.3,576.3c-14.2,0-25.8,4.3-34.8,13c-9,8.6-13.5,19.9-13.5,33.6v71.5c0,15.4,4.1,27.4,12.3,36.1
        c8.2,8.7,19.4,13.1,33.6,13.1c15.8,0,27.7-4.1,35.7-12.3c8-8.3,12-20.5,12-36.9v-8.2h-32.7v7.2c0,9.4-1.1,15.4-3.2,18.2
        c-2.1,2.7-5.8,4.1-11,4.1c-5.1,0-8.7-1.6-10.8-4.8c-2.1-3.3-3.1-9.1-3.1-17.5v-29.9h60.7V623c0-15-3.9-26.6-11.7-34.6
        C714.1,580.3,702.9,576.3,688.3,576.3z M700.9,638.9h-28.1v-16.1c0-6.7,1-11.5,3.3-14.3c2.2-3,5.8-4.4,10.9-4.4
        c4.8,0,8.4,1.4,10.6,4.4c2.2,2.8,3.4,7.6,3.4,14.3V638.9z"/>
</g>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="https://plus.google.com/+Blendtec">
            <span className="icon icon_circle_google">
<svg  style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<g>
    <path  d="M416.7,474.1c13.1,0,24.1-5.2,32.6-14.9c13.4-15.2,19.3-40.3,15.8-66.9c-6.3-47.5-40.2-87-75.6-88.1l-1.4,0
        c-12.5,0-23.7,5.1-32.3,14.9c-13.2,15.1-18.8,38.9-15.3,65.4c6.2,47.5,40.8,88.5,75.6,89.5H416.7z"/>
    <path  d="M455.4,617.3c-3.5-2.4-7.1-4.8-10.8-7.4c-10.9-3.3-22.5-5.1-34.4-5.3h-1.5c-54.6,0-102.5,33.1-102.5,70.8
        c0,41,41,73.1,93.4,73.1c69.1,0,104.1-23.8,104.1-70.8c0-4.4-0.5-9-1.6-13.6C497.4,645.9,480.6,634.5,455.4,617.3z"/>
    <path  d="M512,0C229.2,0,0,229.2,0,512c0,282.8,229.2,512,512,512c282.7,0,512-229.2,512-512
        C1024,229.2,794.8,0,512,0z M465.4,790.6c-20.4,5.9-42.4,8.9-65.6,8.9c-25.7,0-50.5-3-73.6-8.8c-44.7-11.3-77.8-32.7-93.2-60.2
        c-6.6-11.9-10-24.6-10-37.8c0-13.6,3.3-27.3,9.6-40.9c24.5-52.2,89.1-87.3,160.6-87.3c0.7,0,1.4,0,2.1,0
        c-5.8-10.2-8.6-20.8-8.6-31.9c0-5.6,0.7-11.2,2.2-17c-75-1.7-131.1-56.7-131.1-129.1c0-51.1,40.9-100.9,99.3-121.1
        c17.5-6,35.4-9.1,52.9-9.1h160.4c5.5,0,10.3,3.5,12,8.7c1.7,5.2-0.2,10.9-4.6,14.1l-35.8,25.9c-2.2,1.6-4.8,2.4-7.4,2.4h-12.8
        c16.6,19.9,26.3,48.2,26.3,80c0,35.1-17.8,68.4-50.1,93.7c-25,19.5-26,24.8-26,35.9c0.3,6.1,17.7,26,36.9,39.6
        c44.8,31.7,61.4,62.7,61.4,114.5C570.1,725.3,529,772.1,465.4,790.6z M827.7,515.4c0,7-5.7,12.6-12.6,12.6h-91.1v91.2
        c0,7-5.6,12.6-12.6,12.6h-25.9c-7,0-12.6-5.6-12.6-12.6v-91.2h-91.2c-6.9,0-12.6-5.6-12.6-12.6v-26c0-6.9,5.7-12.6,12.6-12.6h91.2
        v-91.1c0-7,5.6-12.6,12.6-12.6h25.9c7,0,12.6,5.6,12.6,12.6v91.1h91.1c6.9,0,12.6,5.7,12.6,12.6V515.4z"/>
</g>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="http://www.blendtec.com/blog">
            <span className="icon icon_circle_blog">
<svg style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<path  d="M512,0C229.2,0,0,229.2,0,512s229.2,512,512,512s512-229.2,512-512S794.8,0,512,0z M828.4,646.8
    c-0.8,23.1-6.1,45.5-16.4,66.4c-17.8,36.2-47.2,56.6-86.6,62.7c-11.9,1.8-24.1,1.7-36.1,2c-13.7,0.4-27.5,0.3-41.2,0.3
    c-61.6,0-123.2,0-184.8,0c-59.2,0.1-118.5,0-177.7,0.4c-27.8,0.2-50-11.1-68.1-31.2c-16-17.9-23.6-39.2-23.4-63.2
    c0.6-50.2,1.3-100.4,2.2-150.7c0.1-7.5,1.5-15,2.3-22.5c0.7-0.1,1.4-0.1,2-0.2c1.3,2.7,2.6,5.4,3.8,8.1c12.3,27,26,53.2,43.4,77.3
    c45.1,62.4,106.4,99.6,181.6,113.1c62.8,11.3,123.4,2,179.6-28.6c53-28.8,92-70.7,110.7-128.9c21.9-68.3,10.9-131.4-35-186.8
    c-32.4-39.1-74.8-61-125.7-65.8c-29.6-2.8-58.2,1.1-85.4,13.3c-31.9,14.3-57.2,36.3-72.2,68.4c-13.6,29.1-15.6,59.1-2.1,88.7
    c14.5,31.9,39.5,51.7,74.5,55.4c24.3,2.6,46.1-4.5,59.7-27.4c3.4-5.7,5.3-11.7,4.7-18.3c-1.2-14-11.8-24.2-26.7-21.8
    c-9.7,1.6-17.8-2.6-20.2-10.5c-1.5-5.1-2.1-10.8-1.5-16c1.1-9.4,6.3-16.7,14.3-21.9c20.3-13.2,41.8-14.1,63.8-5.2
    c33.9,13.7,56.5,51.1,53.5,87.5c-0.9,11.4-2.5,22.5-6.7,33.3c-6.8,17.6-17.3,32.5-31,45.3c-22.7,21.2-49.8,33.4-80.3,37.9
    c-39.8,5.8-77.2-2.5-112.6-20.8c-15.1-7.8-27.4-19.3-39.3-31.3c-29.3-29.5-46.6-65.1-51-106.2c-4.1-37.9,1.6-74.5,19.3-109
    c23.8-46.4,59.4-80.3,106.1-103c44.6-21.7,91.8-29.1,140.9-25.9c33,2.2,64,12.3,94,25.8c66.9,30,113.7,79,140.2,147.3
    c14.7,37.8,23.1,77,26.2,117.4C831.1,550.7,830.1,598.7,828.4,646.8z"/>
</svg>

            </span>
        </a>
    </li>
    <li className="social-icon">
        <a href="http://instagram.com/blendtec">
            <span className="icon icon_circle_instagram">
<svg style={{height:'21px;'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
<g>
    <polygon  points="723.4,399.9 723.4,317.9 723.4,305.6 711.1,305.6 629,305.9 629.3,400.3   "/>
    <path  d="M509.5,617.8c54,0,98-43.9,98-98c0-21.3-6.9-41.1-18.6-57.1c-17.8-24.7-46.7-40.9-79.4-40.9
        c-32.7,0-61.6,16.2-79.4,40.9c-11.6,16.1-18.5,35.8-18.5,57.1C411.5,573.8,455.5,617.8,509.5,617.8z"/>
    <path  d="M512,0C229.2,0,0,229.2,0,512c0,282.8,229.2,512,512,512c282.7,0,512-229.2,512-512
        C1024,229.2,794.8,0,512,0z M787.8,462.7v227.9c0,59.3-48.3,107.6-107.6,107.6H338.7c-59.3,0-107.6-48.2-107.6-107.6V462.7V349
        c0-59.3,48.2-107.6,107.6-107.6h341.5c59.3,0,107.6,48.2,107.6,107.6V462.7z"/>
    <path  d="M661.7,519.8c0,83.9-68.3,152.2-152.2,152.2c-83.9,0-152.2-68.3-152.2-152.2c0-20.2,4-39.5,11.2-57.1h-83.1
        v227.9c0,29.4,23.9,53.3,53.3,53.3h341.5c29.4,0,53.3-23.9,53.3-53.3V462.7h-83.1C657.6,480.3,661.7,499.6,661.7,519.8z"/>
</g>
</svg>

            </span>
        </a>
    </li>
</ul>
</div>
</div>

    <div className="registration-thank-you--buttons">
        <a href="/recipes" id="recipes_div" className="registration-thank-you--button">
            <img src="http://cdn.blendtec.com/img/registration/prodreg-btn-recipes.jpg" className="registration-thank-you--button-image" alt="Recipes" />         <div className="registration-thank-you--button-content">
                <h4 id="registration-recipes-thanks" className="registration-thank-you--btn-title">{props.t('RECIPES')}</h4>

<i className="bt-icon-action svg registration-thank-you--button-arrow">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
    <circle id="circle" fill="none" stroke="none" stroke-width="10" stroke-miterlimit="10" cx="512" cy="511.1" r="503.9">
    </circle>
    <path id="arrow" fill="none" d="M421.5,206.3l-72.7,72.7L587.7,518L348.8,756.9l72.7,72.7L733.1,518
        L421.5,206.3z"></path>
    <polygon id="plus" fill="none" points="827.7,472.4 552,472.4 552,196.7 473.2,196.7 473.2,472.4 197.5,472.4 197.5,551.1
        473.2,551.1 473.2,826.8 552,826.8 552,551.1 827.7,551.1 "></polygon>
    <rect id="minus" x="197.5" y="472.4" fill="none" width="630.2" height="78.8">
    </rect>
    <polygon id="close" fill="none" points="762.2,706.7 567.3,511.8 762.2,316.8 706.5,261.1 511.6,456.1 316.6,261.1 261,316.8
    455.9,511.7 261,706.7 316.7,762.4 511.6,567.4 706.6,762.4 "></polygon>
    </svg>

    <div className="svg-action-icon-alternate"></div>
</i>            </div>
        </a>
        <a href="/faq" className="registration-thank-you--button">
            <img src="http://cdn.blendtec.com/img/registration/prodreg-btn-faq.jpg" className="registration-thank-you--button-image" alt="FAQ's" />           <div className="registration-thank-you--button-content">
                <h4 id="registration-faq-thanks" className="registration-thank-you--btn-title">{props.t('FAQS')}</h4>

<i className="bt-icon-action svg registration-thank-you--button-arrow">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
    <circle id="circle" fill="none" stroke="none" stroke-width="10" stroke-miterlimit="10" cx="512" cy="511.1" r="503.9">
    </circle>
    <path id="arrow" fill="none" d="M421.5,206.3l-72.7,72.7L587.7,518L348.8,756.9l72.7,72.7L733.1,518
        L421.5,206.3z"></path>
    <polygon id="plus" fill="none" points="827.7,472.4 552,472.4 552,196.7 473.2,196.7 473.2,472.4 197.5,472.4 197.5,551.1
        473.2,551.1 473.2,826.8 552,826.8 552,551.1 827.7,551.1 "></polygon>
    <rect id="minus" x="197.5" y="472.4" fill="none" width="630.2" height="78.8">
    </rect>
    <polygon id="close" fill="none" points="762.2,706.7 567.3,511.8 762.2,316.8 706.5,261.1 511.6,456.1 316.6,261.1 261,316.8
    455.9,511.7 261,706.7 316.7,762.4 511.6,567.4 706.6,762.4 "></polygon>
    </svg>

    <div className="svg-action-icon-alternate"></div>
</i>            </div>
        </a>
        <a href="/support/guides" className="registration-thank-you--button">
            <img src="http://cdn.blendtec.com/img/registration/prodreg-btn-prodguide.jpg" className="registration-thank-you--button-image" alt="Product Guides" />            <div className="registration-thank-you--button-content">
                <h4 id="registration-guides-thanks" className="registration-thank-you--btn-title">{props.t('PRODUCT_GUIDES')}</h4>

<i className="bt-icon-action svg registration-thank-you--button-arrow">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" >
    <circle id="circle" fill="none" stroke="none" stroke-width="10" stroke-miterlimit="10" cx="512" cy="511.1" r="503.9">
    </circle>
    <path id="arrow" fill="none" d="M421.5,206.3l-72.7,72.7L587.7,518L348.8,756.9l72.7,72.7L733.1,518
        L421.5,206.3z"></path>
    <polygon id="plus" fill="none" points="827.7,472.4 552,472.4 552,196.7 473.2,196.7 473.2,472.4 197.5,472.4 197.5,551.1
        473.2,551.1 473.2,826.8 552,826.8 552,551.1 827.7,551.1 "></polygon>
    <rect id="minus" x="197.5" y="472.4" fill="none" width="630.2" height="78.8">
    </rect>
    <polygon id="close" fill="none" points="762.2,706.7 567.3,511.8 762.2,316.8 706.5,261.1 511.6,456.1 316.6,261.1 261,316.8
    455.9,511.7 261,706.7 316.7,762.4 511.6,567.4 706.6,762.4 "></polygon>
    </svg>

    <div className="svg-action-icon-alternate"></div>
</i>            </div>
        </a>
        <a href="/use-and-care" className="registration-thank-you--button">
            <img src="http://cdn.blendtec.com/img/registration/prodreg-btn-usecare.jpg" className="registration-thank-you--button-image" alt="Use &amp; Care" />          <div className="registration-thank-you--button-content">
                <h4 id="registration-usecare-thanks" className="registration-thank-you--btn-title">{props.t('USE_CARE')}</h4>

<i className="bt-icon-action svg registration-thank-you--button-arrow">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" >
    <circle id="circle" fill="none" stroke="none" stroke-width="10" stroke-miterlimit="10" cx="512" cy="511.1" r="503.9">
    </circle>
    <path id="arrow" fill="none" d="M421.5,206.3l-72.7,72.7L587.7,518L348.8,756.9l72.7,72.7L733.1,518
        L421.5,206.3z"></path>
    <polygon id="plus" fill="none" points="827.7,472.4 552,472.4 552,196.7 473.2,196.7 473.2,472.4 197.5,472.4 197.5,551.1
        473.2,551.1 473.2,826.8 552,826.8 552,551.1 827.7,551.1 "></polygon>
    <rect id="minus" x="197.5" y="472.4" fill="none" width="630.2" height="78.8">
    </rect>
    <polygon id="close" fill="none" points="762.2,706.7 567.3,511.8 762.2,316.8 706.5,261.1 511.6,456.1 316.6,261.1 261,316.8
    455.9,511.7 261,706.7 316.7,762.4 511.6,567.4 706.6,762.4 "></polygon>
    </svg>

    <div className="svg-action-icon-alternate"></div>
</i>            </div>
        </a>
    </div>
    </div>

		</div>
	);
}

export default successPage;