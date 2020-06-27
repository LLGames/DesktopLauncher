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
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
      width: 150,
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

const WordSearch = () => {
  const classes = useStyles({});

  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [exportedFormatFile, setExportedFormatFile] = useState<string>('');
  const [sizeBoardGame, setSizeBoardGame] = useState<string>('');
  const [numberWord, setNumberWord] = useState<string>('');

  /*
  function handleClose() {
    setOpen(false);
  }
  */

  function handleGenerateGame() {
    const file = selectedFile;
    const exportedFormat = exportedFormatFile;
    const sizeBoard = sizeBoardGame;
    const nmberWord = numberWord;

    console.log({
      exportedFormat,
      sizeBoard,
      file,
      numberWord
    });
  }

  function handleExportedFormatFile(event: ChangeEvent<HTMLSelectElement>) {
    const importeFormat = event.target.value;
    setExportedFormatFile(importeFormat as string);
  };

  function handleSizeBoardGame(event: ChangeEvent<HTMLSelectElement>) {
    const exportFormat = event.target.value;
    setSizeBoardGame(exportFormat as string);
  };
  
  function handleNumberWord(event: ChangeEvent<HTMLInputElement>) {
    const exportFormat = event.target.value;
    setNumberWord(exportFormat as string);
  };

  return (
    <Fragment>
      <Head>
        <title>Word Search</title>
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

          <img style={gameIconStyle} src="/images/word-search.png" alt="Word search game icon" />
          <Typography variant="h4" gutterBottom={true}>
            Word Search
        </Typography>

          <Dropzone onFileUploaded={setSelectedFile} />

          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="selectExtportAsLabel">Export as</InputLabel>
              <Select
                labelId="selectExtportAsLabel"
                id="selectExtportAs"
                value={exportedFormatFile}
                onChange={handleExportedFormatFile}
              >
                <MenuItem value={'csv'}>csv</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="selectSizeBoardGameLabel">Size</InputLabel>
              <Select
                labelId="selectSizeBoardGameLabel"
                id="selectSizeBoardGame"
                value={sizeBoardGame}
                onChange={handleSizeBoardGame}
              >
                <MenuItem value={'15x15'}>15x15</MenuItem>
                <MenuItem value={'16x16'}>16x16</MenuItem>
                <MenuItem value={'17x17'}>17x17</MenuItem>
                <MenuItem value={'18x18'}>18x18</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="numberWords"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.formControl}
              value={numberWord}
              onChange={handleNumberWord}
            />
          </div>

          <Button variant="contained" color="secondary" onClick={handleGenerateGame}>
            Generate Game
        </Button>

        </div>
      </div>
    </Fragment>
  );
};

export default WordSearch;
