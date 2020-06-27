import React, { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from '../components/link';
import Dropzone from '../components/dropzone';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(20),
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
    },
  })
);

const gameIconStyle = {
  width: 128,
  height: 128,
  marginLeft: 30,
  marginBottom: 30,
  marginTop: 10,
  WebkitFilter: 'drop-shadow(2px 2px 2px rgba(0,0,0,.5))',
  cursor: 'pointer',
  transition: 'all 0.5s',
}

const Home = () => {
  const classes = useStyles({});

  return (
    <Fragment>
      <Head>
        <title>Brain Games</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom={true}>
          Brain Games
        </Typography>
        <br/>
        <Link href="/hagman">
          <img style={gameIconStyle} src="/images/hangman.png" alt="Hangman game icon" />
        </Link>
        {/*<Link href="/memory">*/}
        <Link href="">
          <img style={gameIconStyle} src="/images/memory.png" alt="Memory game icon" />
        </Link>
        <Link href="/word-search">
          <img style={gameIconStyle} src="/images/word-search.png" alt="Word Search game icon" />
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
