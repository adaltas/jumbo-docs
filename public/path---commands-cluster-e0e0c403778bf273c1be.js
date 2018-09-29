webpackJsonp([0x7ac3be4d4188],{754:function(e,t){e.exports={data:{page:{htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Cluster commands"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Create"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"create <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Create a new empty cluster with a specified name. After the cluster creation, the context is automatically set to this cluster."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--domain DOMAIN"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-d DOMAIN"}]},{type:"text",value:" - Specify a domain name for the cluster. By default, it is generated as "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<name>.local"}]},{type:"text",value:". The domain name is used for nodes urls and for the Kerberos realm which is the domain in uppercase letters."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--template TEMPLATE"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-t TEMPLATE"}]},{type:"text",value:" - Use a template to configure the cluster. See the list of available templates on the Github repo ("},{type:"element",tagName:"a",properties:{href:"https://github.com/adaltas/jumbo/tree/master/jumbo/core/config/templates/docs"},children:[{type:"text",value:"templates/docs"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--ambari-repo REPO-URL"}]},{type:"text",value:" - Specify the url where the Ambari repository should be downloaded. By default, it is the official repository of Ambari 2.6.1.5 ("},{type:"element",tagName:"a",properties:{href:"http://public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.6.1.5/ambari.repo"},children:[{type:"text",value:"http://public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.6.1.5/ambari.repo"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--vdf VDF-URL"}]},{type:"text",value:" - Specify the url where the "},{type:"element",tagName:"a",properties:{href:"https://docs.hortonworks.com/HDPDocuments/Ambari-2.6.0.0/bk_ambari-release-notes/content/ambari_relnotes-2.6.0.0-behavioral-changes.html"},children:[{type:"text",value:"VDF file"}]},{type:"text",value:" for the HDP stack should be downloaded. By default, it is the official VDF file for HDP 2.6.4.0 ("},{type:"element",tagName:"a",properties:{href:"http://public-repo-1.hortonworks.com/HDP/centos7/2.x/updates/2.6.4.0/HDP-2.6.4.0-91.xml"},children:[{type:"text",value:"http://public-repo-1.hortonworks.com/HDP/centos7/2.x/updates/2.6.4.0/HDP-2.6.4.0-91.xml"}]},{type:"text",value:")."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Delete"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"delete <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Delete a cluster previously created. On deletion, the Vagrant virtual machines of the cluster are also destroyed."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--force"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-f"}]},{type:"text",value:" - Avoid the confirmation message prompt."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Exit"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"exit"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"hint-box",properties:{type:"info",text:"Only useful in the Jumbo shell."},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Clean the Jumbo shell context."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"List clusters"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"listclusters"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List all the clusters managed by Jumbo. The list contains details about the domain names, the numbers of VMs, the services installed and the repositories URLs."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Provision"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"provision"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Start the virtual machines and force provisioning."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster of the virtual machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Repair"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"repair <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Recreate a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"jumbo_config"}]},{type:"text",value:" file for a cluster if it has been destroyed. If this is the case, Jumbo will let you know with an error message."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Restart"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"restart"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Restart the virtual machines of a cluster."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster of the virtual machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Start"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"start"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Start the virtual machines of a cluster. Once started, starts the Hadoop services. "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"The first time"}]},{type:"text",value:", it will start the virtual machines and install all components."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster of the virtual machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Status"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"status"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Give the status of the virtual machines of a cluster."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster of the virtual machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Stop"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"stop"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Stop the virtual machines of a cluster."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Options"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--cluster"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"-c"}]},{type:"text",value:" - The cluster of the virtual machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Use"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"use <name>"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"hint-box",properties:{type:"info",text:"Only useful in the Jumbo shell."},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Set the context to a previously created cluster. The context allows to use Jumbo without specifying the cluster on every command. The current context is indicated next to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"jumbo"}]},{type:"text",value:" in the shell:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"markdown"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-markdown"]},children:[{type:"element",tagName:"code",properties:{className:["language-markdown"]},children:[{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"jumbo > use mycluster\n"}]},{type:"text",value:'Loading mycluster...\nCluster "mycluster" loaded.\njumbo (mycluster) >'}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/commands/cluster/"},frontmatter:{title:"Cluster commands"}}},pathContext:{}}}});
//# sourceMappingURL=path---commands-cluster-e0e0c403778bf273c1be.js.map