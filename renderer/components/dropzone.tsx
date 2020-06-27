import { useDropzone } from 'react-dropzone';
import React, { useCallback, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { FiUpload } from 'react-icons/fi';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',

      outline: 0,
      objectFit: 'cover',
      backgroundColor: '#f1f1f1',

      height: 80,
      width: '40%',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 'borders',

      WebkitFilter: 'drop-shadow(2px 2px 2px rgba(0,0,0,.5))',
      //filter: 'drop-shadow(15px 10px 5px rgba(0,0,0,.5))',
      cursor: 'pointer',
      transition: 'all 0.5s',

    }
  })
);

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const styles = useStyles({});
  const [selectedFilUrl, setSelectedFileName] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileName = file.name;

    setSelectedFileName(fileName);
    onFileUploaded(file);
  }, [onFileUploaded])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv'
  });
  const { ref, ...rootProps } = getRootProps()

  return (
    <>
      <Box boxShadow={1} className={styles.root} {...getRootProps()}>
        <input {...getInputProps()} accept=".csv" />

        {selectedFilUrl
          ? <p>
            <FiUpload /> <br />
            {selectedFilUrl}
          </p>
          : <p>
            <FiUpload /> <br />
            Input File
          </p>
        }
      </Box>
    </>
  )
}


export default Dropzone;