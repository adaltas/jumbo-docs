import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import schema from "./../layouts/home/jumbo-schema.svg";
import shell from "../layouts/home/jumbo-shell.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  gridItemOdd: {
    textAlign: "right"
  },
  imgContainer: {
    textAlign: "center"
  },
  gridImg: {
    maxWidth: "100%"
  }
});

class IndexPage extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <Grid container className={classes.root} spacing={24}>
          <Grid
            item
            container
            spacing={32}
            xs={12}
            sm={12}
            className={classes.gridItemOdd}
          >
            <Grid item xs={12} sm={6}>
              <h3>{"CONFIGURE YOUR DEVELOPMENT ENVIRONMENT"}</h3>
              <p>
                {
                  "Configure your clusters in minutes with the friendly Jumbo CLI and start developing! All the boring stuff is abstracted."
                }
              </p>
              <p>
                <b>{"New to Hadoop?"}</b>
                <br />
                {"Jumbo is made for you!"}
                <br />
                {
                  "Within the CLI, you cannot misconfigure nor missplace any service."
                }
              </p>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.imgContainer}>
              <img className={classes.gridImg} src={shell} />
            </Grid>
          </Grid>
          <Grid item container spacing={32} xs={12} sm={12}>
            <Grid item xs={12} sm={6} className={classes.imgContainer}>
              <img className={classes.gridImg} src={schema} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>RELY ON TRUSTED TOOLS</h3>
              <p>
                Jumbo leverages trusted DevOps tools to provision the clusters
                on local virtual machines:
              </p>
              <ul>
                <li>
                  <a href="https://www.vagrantup.com/">Vagrant</a> to create
                  virtual machines locally;
                </li>
                <li>
                  <a href="https://www.ansible.com/">Ansible</a> to configure
                  the nodes and install needed services;
                </li>
                <li>
                  <a href="https://ambari.apache.org/">Apache Ambari</a> to
                  install Hadoop services (
                  <a href="https://fr.hortonworks.com/products/data-platforms/hdp/">
                    HDP
                  </a>{" "}
                  stack);
                </li>
                <li>
                  <a href="https://www.freeipa.org/page/Main_Page">FreeIPA</a>{" "}
                  to secure the cluster (LDAP and Kerberos).
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
