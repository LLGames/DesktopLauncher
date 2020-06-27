import React, { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      justifyContent: 'center',

      paddingTop: theme.spacing(5),
    },
    leftArrow: {
      textAlign: 'center',
      justifyContent: 'center',
    },
    formControl: {
      margin: theme.spacing(6),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const gameIconStyle = {
  width: 64,
  height: 64,
  borderRight: 100,
  WebkitFilter: 'drop-shadow(2px 2px 2px rgba(0,0,0,.5))',
  cursor: 'pointer',
  transition: 'all 0.5s',
}

const Memory = () => {
  const classes = useStyles({});

  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [importedFormatFile, setImportedFormatFile] = useState<string>('');
  const [exportedFormatFile, setExportedFormatFile] = useState<string>('');

  /*
  function handleClose() {
    setOpen(false);
  }
  */

  function handleGenerateGame() {
    const exportedFormat = exportedFormatFile;
    const importedFormat = importedFormatFile;
    const file = selectedFile;

    console.log({
      exportedFormat,
      importedFormat,
      file,
    });
  }

  function handleImportedFormatFile(event: ChangeEvent<HTMLSelectElement>) {
    const exportFormat = event.target.value;
    setImportedFormatFile(exportFormat as string);
  };

  function handleExportedFormatFile(event: ChangeEvent<HTMLSelectElement>) {
    const importeFormat = event.target.value;
    setExportedFormatFile(importeFormat as string);
  };

  return (
    <Fragment>
      <Head>
        <title>Hangman</title>
      </Head>
      <div>
        <Link href="/home" >
          <ArrowBackIcon style={{ marginLeft: '20px', marginTop: '20px' }} />
        </Link>
        <div className={classes.root}>
          { /*  
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>Cadastrado com</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
        */ }

          <img style={gameIconStyle} src="/images/memory.png" alt="Memory game icon" />
          <Typography variant="h4" gutterBottom={true}>
            Memory
        </Typography>

          <Dropzone onFileUploaded={setSelectedFile} />

          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Import to</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={importedFormatFile}
                onChange={handleImportedFormatFile}
              >
                <MenuItem value={'html'}>html</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Export to</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={exportedFormatFile}
                onChange={handleExportedFormatFile}
              >
                <MenuItem value={'csv'}>csv</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button variant="contained" color="secondary" onClick={handleGenerateGame}>
            Generate Game
        </Button>

        </div>
      </div>
    </Fragment>
  );
};

export default Memory;
