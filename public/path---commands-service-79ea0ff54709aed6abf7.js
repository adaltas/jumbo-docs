webpackJsonp([0x906fbeedf9bc],{757:function(e,t){e.exports={data:{page:{htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Service commands"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Add service"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"addservice <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Add a service to a cluster and install the service's clients on all nodes. By default, also auto-install the service's components on the best fitting hosts."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nThe list of the services is available in the "},{type:"element",tagName:"a",properties:{href:"../about/supported"},children:[{type:"text",value:"Supported services"}]},{type:"text",value:" section."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster to which the service should be added."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--no-auto"}]},{type:"text",value:" - Avoid the auto-installation of the components. Only the clients will be installed. See "},{type:"element",tagName:"a",properties:{href:"./component"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"addcomponent"}]}]},{type:"text",value:" for manual component installation."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--ha"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-h"}]},{type:"text",value:" - Install the service in High Availability mode. Not available for all services (list "},{type:"element",tagName:"a",properties:{href:"../about/supported"},children:[{type:"text",value:"here"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--recursive"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-r"}]},{type:"text",value:" - Also install all the service's dependencies (components and services)."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Check service"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"checkservice <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Check if a service is complete (if all the components needed for it to be functional are installed) on a cluster. If not, a list of the missing components is given."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster on which to check the service."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"List services"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"listservices"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List all the services installed on a cluster and their status. The services' names are colored:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"green = service complete"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"orange = service missing a few components"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"red = service missing a lot of components\nIf a service misses components, they are listed."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster in which the service should be deleted."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Remove service"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"rmservice <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Remove a service and all its components of a cluster. A service cannot be deleted if other services depend on it."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster in which the service should be deleted."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--force"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-f"}]},{type:"text",value:" - Avoid the confirmation prompt."}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/commands/service/"},frontmatter:{title:"Service commands"}}},pathContext:{}}}});
//# sourceMappingURL=path---commands-service-79ea0ff54709aed6abf7.js.map