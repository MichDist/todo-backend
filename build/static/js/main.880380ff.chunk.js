(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},20:function(t,e,n){},21:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=(n(20),n(4)),i=n(2),l=(n(21),function(t){var e=t.task;return void 0!==e.subtasks?e.subtasks.map((function(t){return o.a.createElement("li",{key:t.id},t.content)})):null}),s=function(t){var e=t.task,n=t.toggleImportance,a=t.onDelete,r=t.onUpdate,c=t.updatedTask,u=t.handleUpdatedTask,i=e.important?"make not important":"make important";return o.a.createElement("li",{key:e.id},e.content,o.a.createElement("button",{onClick:n},i),o.a.createElement("button",{onClick:function(){return t=e.id,n=e.content,void(window.confirm('Do you really want to delete the task "'.concat(n,'"?'))&&a(t));var t,n}},"Delete"),o.a.createElement("form",{onSubmit:function(){return t=e.id,void r(t);var t}},o.a.createElement("input",{value:c,onChange:u}),o.a.createElement("button",{type:"submit"},"Update task")),o.a.createElement("ul",null,o.a.createElement(l,{task:e})))},m=n(3),f=n.n(m),d=function(){return f.a.get("/api/tasks").then((function(t){return t.data}))},p=function(t){return f.a.post("/api/tasks",t).then((function(t){return t.data}))},k=function(t,e){return f.a.put("".concat("/api/tasks","/").concat(t),e).then((function(t){return t.data}))},v=function(t){return f.a.delete("".concat("/api/tasks","/").concat(t))},h=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},b=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)("Some new task"),l=Object(i.a)(c,2),m=l[0],f=l[1],b=Object(a.useState)(!0),g=Object(i.a)(b,2),E=g[0],w=g[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),S=j[0],C=j[1],T=Object(a.useState)(null),y=Object(i.a)(T,2),D=y[0],U=y[1],I=Object(a.useState)(""),L=Object(i.a)(I,2),B=L[0],J=L[1];Object(a.useEffect)((function(){d().then((function(t){r(t)}))}),[]);var N=function(t){v(t).then((function(){var e=n.filter((function(e){return e.id!==t}));r(e)}))},W=function(t,e){var a=n.find((function(e){return e.id===t})),o=Object(u.a)({},a,{content:B});k(t,o).then((function(t){r(t)}))},x=function(t){console.log(t.target.value),J(t.target.value)},A=E?n.filter((function(t){return t.content.toLowerCase().includes(S.toLowerCase())})).map((function(t){return o.a.createElement(s,{task:t,toggleImportance:function(){return M(t.id)},onDelete:N,onUpdate:W,updatedTask:B,handleUpdatedTask:x})})):n.filter((function(t){return t.content.toLowerCase().includes(S.toLowerCase())})).filter((function(t){return t.important})).map((function(t){return o.a.createElement(s,{task:t,toggleImportance:function(){return M(t.id)},onDelete:N,onUpdate:W,updatedTask:B,handleUpdatedTask:x})})),M=function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)({},e,{important:!e.important});k(t,a).then((function(t){r(t)})).catch((function(a){U("The Task '".concat(e.content,"' is not on the server!")),setTimeout((function(){U(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))};return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Tasks"),o.a.createElement(h,{message:D}),o.a.createElement("ul",null,A),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then((function(t){r(n.concat(t)),f("")}))}},o.a.createElement("input",{value:m,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),o.a.createElement("button",{type:"submit"},"Save new task")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return w(!E)}},"Show ",E?"only important tasks":"all tasks")),o.a.createElement("div",null,o.a.createElement("input",{onChange:function(t){console.log(t.target.value),C(t.target.value)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.880380ff.chunk.js.map