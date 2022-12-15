import React from 'react';
import PropTypes from 'prop-types';
 
const Messages = ({isActive}) => {
  return (
     <a
    href="messages"
    className={`flex items-center p-2 space-x-3 ${isActive?'border-r-4 border-[#38ae00]':''}`}
  >
    {isActive?(<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.69062 26.775C2.22643 26.7725 1.78194 26.587 1.4537 26.2588C1.12546 25.9306 0.939963 25.4861 0.9375 25.0219V10.6031C0.939975 9.64165 1.32302 8.72026 2.00289 8.04039C2.68276 7.36052 3.60415 6.97748 4.56562 6.97501H21.675C22.6381 6.975 23.5619 7.35695 24.2438 8.03709C24.9257 8.71723 25.31 9.64003 25.3125 10.6031V20.2125C25.3125 21.1756 24.9306 22.0994 24.2504 22.7813C23.5703 23.4632 22.6475 23.8475 21.6844 23.85H7.41562C7.25356 23.8513 7.09606 23.9038 6.96562 24L3.75 26.4281C3.44339 26.6547 3.07187 26.7764 2.69062 26.775ZM4.56562 8.85001C4.10143 8.85247 3.65694 9.03796 3.3287 9.36621C3.00046 9.69445 2.81496 10.1389 2.8125 10.6031V24.7875L5.84062 22.5C6.29625 22.1616 6.84809 21.9777 7.41562 21.975H21.675C22.1424 21.975 22.5907 21.7893 22.9213 21.4588C23.2518 21.1282 23.4375 20.6799 23.4375 20.2125V10.6031C23.435 10.1389 23.2495 9.69445 22.9213 9.36621C22.5931 9.03796 22.1486 8.85247 21.6844 8.85001H4.56562Z" fill="#38AE00"/>
<path d="M16.8203 16.4344C17.3381 16.4344 17.7578 16.0147 17.7578 15.4969C17.7578 14.9791 17.3381 14.5594 16.8203 14.5594C16.3025 14.5594 15.8828 14.9791 15.8828 15.4969C15.8828 16.0147 16.3025 16.4344 16.8203 16.4344Z" fill="#38AE00"/>
<path d="M13.1797 16.4344C13.6975 16.4344 14.1172 16.0147 14.1172 15.4969C14.1172 14.9791 13.6975 14.5594 13.1797 14.5594C12.6619 14.5594 12.2422 14.9791 12.2422 15.4969C12.2422 16.0147 12.6619 16.4344 13.1797 16.4344Z" fill="#38AE00"/>
<path d="M9.42969 16.4344C9.94745 16.4344 10.3672 16.0147 10.3672 15.4969C10.3672 14.9791 9.94745 14.5594 9.42969 14.5594C8.91192 14.5594 8.49219 14.9791 8.49219 15.4969C8.49219 16.0147 8.91192 16.4344 9.42969 16.4344Z" fill="#38AE00"/>
<path d="M28.125 17.2875C27.8764 17.2875 27.6379 17.1887 27.4621 17.0129C27.2863 16.8371 27.1875 16.5986 27.1875 16.35V6.85313C27.185 6.38893 26.9995 5.94445 26.6713 5.61621C26.3431 5.28796 25.8986 5.10247 25.4344 5.10001H6.5625C6.31386 5.10001 6.0754 5.00123 5.89959 4.82542C5.72377 4.6496 5.625 4.41115 5.625 4.16251C5.625 3.91387 5.72377 3.67541 5.89959 3.49959C6.0754 3.32378 6.31386 3.22501 6.5625 3.22501H25.4344C26.3959 3.22748 27.3172 3.61052 27.9971 4.29039C28.677 4.97026 29.06 5.89165 29.0625 6.85313V16.35C29.0625 16.5986 28.9637 16.8371 28.7879 17.0129C28.6121 17.1887 28.3736 17.2875 28.125 17.2875Z" fill="#38AE00"/>
</svg>
):  <svg
width="30"
height="30"
viewBox="0 0 30 30"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M2.69062 26.775C2.22643 26.7725 1.78194 26.587 1.4537 26.2588C1.12546 25.9306 0.939963 25.4861 0.9375 25.0219V10.6031C0.939975 9.64165 1.32302 8.72026 2.00289 8.04039C2.68276 7.36052 3.60415 6.97748 4.56562 6.97501H21.675C22.6381 6.975 23.5619 7.35695 24.2438 8.03709C24.9257 8.71723 25.31 9.64003 25.3125 10.6031V20.2125C25.3125 21.1756 24.9306 22.0994 24.2504 22.7813C23.5703 23.4632 22.6475 23.8475 21.6844 23.85H7.41562C7.25356 23.8513 7.09606 23.9038 6.96562 24L3.75 26.4281C3.44339 26.6547 3.07187 26.7764 2.69062 26.775ZM4.56562 8.85001C4.10143 8.85247 3.65694 9.03796 3.3287 9.36621C3.00046 9.69445 2.81496 10.1389 2.8125 10.6031V24.7875L5.84062 22.5C6.29625 22.1616 6.84809 21.9777 7.41562 21.975H21.675C22.1424 21.975 22.5907 21.7893 22.9213 21.4588C23.2518 21.1282 23.4375 20.6799 23.4375 20.2125V10.6031C23.435 10.1389 23.2495 9.69445 22.9213 9.36621C22.5931 9.03796 22.1486 8.85247 21.6844 8.85001H4.56562Z"
  fill="#6C6C6C"
/>
<path
  d="M16.8184 16.4344C17.3361 16.4344 17.7559 16.0147 17.7559 15.4969C17.7559 14.9791 17.3361 14.5594 16.8184 14.5594C16.3006 14.5594 15.8809 14.9791 15.8809 15.4969C15.8809 16.0147 16.3006 16.4344 16.8184 16.4344Z"
  fill="#6C6C6C"
/>
<path
  d="M13.1816 16.4344C13.6994 16.4344 14.1191 16.0147 14.1191 15.4969C14.1191 14.9791 13.6994 14.5594 13.1816 14.5594C12.6639 14.5594 12.2441 14.9791 12.2441 15.4969C12.2441 16.0147 12.6639 16.4344 13.1816 16.4344Z"
  fill="#6C6C6C"
/>
<path
  d="M9.43164 16.4344C9.94941 16.4344 10.3691 16.0147 10.3691 15.4969C10.3691 14.9791 9.94941 14.5594 9.43164 14.5594C8.91387 14.5594 8.49414 14.9791 8.49414 15.4969C8.49414 16.0147 8.91387 16.4344 9.43164 16.4344Z"
  fill="#6C6C6C"
/>
<path
  d="M28.125 17.2875C27.8764 17.2875 27.6379 17.1887 27.4621 17.0129C27.2863 16.8371 27.1875 16.5986 27.1875 16.35V6.85313C27.185 6.38893 26.9995 5.94445 26.6713 5.61621C26.3431 5.28796 25.8986 5.10247 25.4344 5.10001H6.5625C6.31386 5.10001 6.0754 5.00123 5.89959 4.82542C5.72377 4.6496 5.625 4.41115 5.625 4.16251C5.625 3.91387 5.72377 3.67541 5.89959 3.49959C6.0754 3.32378 6.31386 3.22501 6.5625 3.22501H25.4344C26.3959 3.22748 27.3172 3.61052 27.9971 4.29039C28.677 4.97026 29.06 5.89165 29.0625 6.85313V16.35C29.0625 16.5986 28.9637 16.8371 28.7879 17.0129C28.6121 17.1887 28.3736 17.2875 28.125 17.2875Z"
  fill="#6C6C6C"
/>
</svg>}
  

    <span className={isActive?'text-white':''}>Messages</span>
    </a>
  );
}
 
Messages.propTypes = {};
 
export default Messages;