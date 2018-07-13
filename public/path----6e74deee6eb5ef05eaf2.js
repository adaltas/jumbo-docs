webpackJsonp([60335399758886],{316:function(e,t){e.exports={layoutContext:{}}},317:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Jumbo",github:{url:"https://github.com/adaltas/jumbo",title:"Jumbo GitHub Repository"},issues:{url:"https://github.com/adaltas/jumbo/issues",title:"Report an issue"},footer:[{title:"Navigate",content:null,links:[{label:"Overview",url:"/overview/"},{label:"Getting started",url:"/getting-started/"},{label:"Jumbo CLI",url:"/commands/"}]},{title:"Contribute",content:null,links:[{label:"GitHub",url:"https://github.com/adaltas/jumbo"},{label:"Issue Tracker",url:"https://github.com/adaltas/jumbo/issues"},{label:"License",url:"https://github.com/adaltas/jumbo/blob/master/LICENSE"}]},{title:"About",content:'Jumbo is an open source product hosted on <a href="https://www.github.com">GitHub</a> and developed by <a href="http://www.adaltas.com">Adaltas</a>.',links:null}]}},menu:{edges:[{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/index.md absPath of file >>> MarkdownRemark",excerpt:"Getting started Welcome to the Jumbo getting started guide! After the explanation of Jumbo  key principles , we will see the main Jumbo commands available through the configuration and provisioning of a tiny  3 nodes cluster  with basic Hadoop…",frontmatter:{title:"Getting started",sort:1},fields:{slug:"/getting-started/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/cluster.md absPath of file >>> MarkdownRemark",excerpt:"Cluster commands Create Command:  Create a new empty cluster with a specified name. After the cluster creation, the context is automatically set to this cluster. Options  or   - Specify a domain name for the cluster. By default, it is generated as…",frontmatter:{title:"Cluster commands",sort:2},fields:{slug:"/commands/cluster/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/key-principles.md absPath of file >>> MarkdownRemark",excerpt:"Key principles Jumbo manages the following types of items: : a cluster of VMs; : a virtual machine managed by Vagrant. A   belongs to a  ; : a service available for install (e.g. 'POSTGRESQL', 'HDFS'). A   is installed at   level; : a component…",frontmatter:{title:"Key principles",sort:2},fields:{slug:"/getting-started/key-principles/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/index.md absPath of file >>> MarkdownRemark",excerpt:"Overview This is the documentation of Jumbo - a tool allowing to deploy local virtualized Hadoop clusters in minutes. You will find a  getting started guide  as well as a detailed description of every command of the  Jumbo CLI  and a complete…",frontmatter:{title:"Overview",sort:2},fields:{slug:"/overview/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/supported.md absPath of file >>> MarkdownRemark",excerpt:"Supported services and components All the client components (tagged in the table) are always auto-installed on all hosts on service installation but can be uninstalled manually. A component can only be installed on a limited number of node's types…",frontmatter:{title:"Supported services and comp...",sort:2},fields:{slug:"/overview/supported/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/node.md absPath of file >>> MarkdownRemark",excerpt:"Node commands Add node Command:  Add a new empty node to a cluster. Options  or   (required) - The node type(s) to choose between  ,  ,  ,  ,  . Type   before each type. See  Key principles  for type descriptions and  Avanced usage  for custom type…",frontmatter:{title:"Node commands",sort:3},fields:{slug:"/commands/node/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/index.md absPath of file >>> MarkdownRemark",excerpt:"Jumbo CLI In this section you will find all the commands available in the Jumbo CLI to manipulate: clusters nodes services components There are two ways of using the CLI: By typing each command individually with   in your terminal; By entering the…",frontmatter:{title:"Jumbo CLI",sort:3},fields:{slug:"/commands/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/service.md absPath of file >>> MarkdownRemark",excerpt:"Service commands Add service Command:  Add a service to a cluster and install the service's clients on all nodes. By default, also auto-install the service's components on the best fitting hosts. The list of the services is available in the…",frontmatter:{title:"Service commands",sort:3},fields:{slug:"/commands/service/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/installation.md absPath of file >>> MarkdownRemark",excerpt:"Installation On Linux",frontmatter:{title:"Installation",sort:3},fields:{slug:"/getting-started/installation/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/versions.md absPath of file >>> MarkdownRemark",excerpt:"Versions Jumbo versions v0.4.2  - 12/07/2018:  Templates for clusters New option for   command:  v0.4.1  - 05/06/2018:  Vagrant commands integration and   tag for  New commands:  ,  ,  ,   to interact with the cluster directly within Jumbo New tag…",frontmatter:{title:"Versions",sort:3},fields:{slug:"/overview/versions/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/component.md absPath of file >>> MarkdownRemark",excerpt:"Component commands Add component Command:  Add a component to a node.\nThe list of the components is available in the  Supported services  section. Options  or   (required) - The node on which the component should be added.  or   - The cluster of the…",frontmatter:{title:"Component commands",sort:5},fields:{slug:"/commands/component/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/configuration.md absPath of file >>> MarkdownRemark",excerpt:"Cluster configuration Now we are ready to create and configure our first cluster with Jumbo! Cluster creation and Jumbo context First, lets enter the Jumbo shell and create our cluster: After creating a cluster, the  Jumbo context  is set to this…",frontmatter:{title:"Cluster configuration",sort:5},fields:{slug:"/getting-started/configuration/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/provisioning.md absPath of file >>> MarkdownRemark",excerpt:"Cluster provisioning Each cluster created with Jumbo has a dedicated folder in  . Jumbo generates all the configuration files needed in this folder (Vagrantfile, Ansible playbooks). You just have to start the provisioning of the cluster and watch the…",frontmatter:{title:"Cluster provisioning",sort:6},fields:{slug:"/getting-started/provisioning/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/advanced-usage.md absPath of file >>> MarkdownRemark",excerpt:"Advanced usage Repositories URLs You might want to use local repositories for your cluster to avoid unnecessary downloads. It is possible to configure the URLs used by Jumbo during the cluster provisioning with the   command or on  cluster creation…",frontmatter:{title:"Advanced usage",sort:7},fields:{slug:"/getting-started/advanced-usage/"}}}]}},layoutContext:{}}},318:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Jumbo",version:"0.4.2",github:{url:"https://github.com/adaltas/jumbo",title:"Jumbo GitHub Repository"},issues:{url:"https://github.com/adaltas/jumbo/issues",title:"Report an issue"},footer:[{title:"Navigate",content:null,links:[{label:"Overview",url:"/overview/"},{label:"Getting started",url:"/getting-started/"},{label:"Jumbo CLI",url:"/commands/"}]},{title:"Contribute",content:null,links:[{label:"GitHub",url:"https://github.com/adaltas/jumbo"},{label:"Issue Tracker",url:"https://github.com/adaltas/jumbo/issues"},{label:"License",url:"https://github.com/adaltas/jumbo/blob/master/LICENSE"}]},{title:"About",content:'Jumbo is an open source product hosted on <a href="https://www.github.com">GitHub</a> and developed by <a href="http://www.adaltas.com">Adaltas</a>.',links:null}]}},menu:{edges:[{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/index.md absPath of file >>> MarkdownRemark",excerpt:"Getting started Welcome to the Jumbo getting started guide! After the explanation of Jumbo  key principles , we will see the main Jumbo commands available through the configuration and provisioning of a tiny  3 nodes cluster  with basic Hadoop…",frontmatter:{title:"Getting started",sort:1},fields:{slug:"/getting-started/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/cluster.md absPath of file >>> MarkdownRemark",excerpt:"Cluster commands Create Command:  Create a new empty cluster with a specified name. After the cluster creation, the context is automatically set to this cluster. Options  or   - Specify a domain name for the cluster. By default, it is generated as…",frontmatter:{title:"Cluster commands",sort:2},fields:{slug:"/commands/cluster/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/key-principles.md absPath of file >>> MarkdownRemark",excerpt:"Key principles Jumbo manages the following types of items: : a cluster of VMs; : a virtual machine managed by Vagrant. A   belongs to a  ; : a service available for install (e.g. 'POSTGRESQL', 'HDFS'). A   is installed at   level; : a component…",frontmatter:{title:"Key principles",sort:2},fields:{slug:"/getting-started/key-principles/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/index.md absPath of file >>> MarkdownRemark",excerpt:"Overview This is the documentation of Jumbo - a tool allowing to deploy local virtualized Hadoop clusters in minutes. You will find a  getting started guide  as well as a detailed description of every command of the  Jumbo CLI  and a complete…",frontmatter:{title:"Overview",sort:2},fields:{slug:"/overview/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/supported.md absPath of file >>> MarkdownRemark",excerpt:"Supported services and components All the client components (tagged in the table) are always auto-installed on all hosts on service installation but can be uninstalled manually. A component can only be installed on a limited number of node's types…",frontmatter:{title:"Supported services and comp...",sort:2},fields:{slug:"/overview/supported/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/node.md absPath of file >>> MarkdownRemark",excerpt:"Node commands Add node Command:  Add a new empty node to a cluster. Options  or   (required) - The node type(s) to choose between  ,  ,  ,  ,  . Type   before each type. See  Key principles  for type descriptions and  Avanced usage  for custom type…",frontmatter:{title:"Node commands",sort:3},fields:{slug:"/commands/node/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/index.md absPath of file >>> MarkdownRemark",excerpt:"Jumbo CLI In this section you will find all the commands available in the Jumbo CLI to manipulate: clusters nodes services components There are two ways of using the CLI: By typing each command individually with   in your terminal; By entering the…",frontmatter:{title:"Jumbo CLI",sort:3},fields:{slug:"/commands/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/service.md absPath of file >>> MarkdownRemark",excerpt:"Service commands Add service Command:  Add a service to a cluster and install the service's clients on all nodes. By default, also auto-install the service's components on the best fitting hosts. The list of the services is available in the…",frontmatter:{title:"Service commands",sort:3},fields:{slug:"/commands/service/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/installation.md absPath of file >>> MarkdownRemark",excerpt:"Installation On Linux",frontmatter:{title:"Installation",sort:3},fields:{slug:"/getting-started/installation/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/overview/versions.md absPath of file >>> MarkdownRemark",excerpt:"Versions Jumbo versions v0.4.2  - 12/07/2018:  Templates for clusters New option for   command:  v0.4.1  - 05/06/2018:  Vagrant commands integration and   tag for  New commands:  ,  ,  ,   to interact with the cluster directly within Jumbo New tag…",frontmatter:{title:"Versions",sort:3},fields:{slug:"/overview/versions/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/commands/component.md absPath of file >>> MarkdownRemark",excerpt:"Component commands Add component Command:  Add a component to a node.\nThe list of the components is available in the  Supported services  section. Options  or   (required) - The node on which the component should be added.  or   - The cluster of the…",frontmatter:{title:"Component commands",sort:5},fields:{slug:"/commands/component/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/configuration.md absPath of file >>> MarkdownRemark",excerpt:"Cluster configuration Now we are ready to create and configure our first cluster with Jumbo! Cluster creation and Jumbo context First, lets enter the Jumbo shell and create our cluster: After creating a cluster, the  Jumbo context  is set to this…",frontmatter:{title:"Cluster configuration",sort:5},fields:{slug:"/getting-started/configuration/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/provisioning.md absPath of file >>> MarkdownRemark",excerpt:"Cluster provisioning Each cluster created with Jumbo has a dedicated folder in  . Jumbo generates all the configuration files needed in this folder (Vagrantfile, Ansible playbooks). You just have to start the provisioning of the cluster and watch the…",frontmatter:{title:"Cluster provisioning",sort:6},fields:{slug:"/getting-started/provisioning/"}}},{node:{id:"/home/gauthier/Projets/jumbo-docs/src/md/getting-started/advanced-usage.md absPath of file >>> MarkdownRemark",excerpt:"Advanced usage Repositories URLs You might want to use local repositories for your cluster to avoid unnecessary downloads. It is possible to configure the URLs used by Jumbo during the cluster provisioning with the   command or on  cluster creation…",frontmatter:{title:"Advanced usage",sort:7},fields:{slug:"/getting-started/advanced-usage/"}}}]}},layoutContext:{}}}});
//# sourceMappingURL=path----6e74deee6eb5ef05eaf2.js.map