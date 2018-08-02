import template from '../static/template.js';
import React from "react";

const Public = () => (
    <div>
    <p>This page is visible to everyone!</p>
</div>
)

//
//     <div>
//     Hi { loggedInUser.nickname }! <img src={ loggedInUser.picture } width="100px" />
// <div>
// <style jsx>{`
//          pre {
//            width: 500px;
//            background: #ddd;
//            white-space: pre-wrap;
//          }
//        `}
// </style>
// <pre>{ JSON.stringify(loggedInUser, null, 2) }</pre>
// </div>
// </div>

export default template(Public)