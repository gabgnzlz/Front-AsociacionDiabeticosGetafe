import React, { useState } from 'react';
// import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import './flotante.css'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

// const baseUrl='http://127.0.0.1:8000/api'

const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: '#c8c8c8',
      borderRadius: '12px',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));

function Flotante() {
    const styles= useStyles();
        /*const [data, setData]=useState([]);*/
        const [modalInsertar, setModalInsertar]=useState(false);


  // const peticionGet=()=>{
  //    axios.get(baseUrl)
  //   .then(response=>{
  //     setData(response.data);
  //     abrirCerrarModalInsertar()
  //   })
  // }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  // useEffect(()=>{
  //    peticionGet();
  // },[])

  const bodyInsertar=(
    <div className={styles.modal}>
        <div className='titleCloseBtn'>
            <Button onClick={()=>abrirCerrarModalInsertar()}>X</Button>
        </div>

        <div className='title-modal'>
            <h1>Definición</h1>
        </div>

        <div className="body-modal">
            <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        
    </div>
  )


  return (
    <div className="flotante">
          
        <Button onClick={()=>abrirCerrarModalInsertar()}>
        Leer más <KeyboardDoubleArrowRightIcon className='icon-diabete' />
        </Button>
          <Modal
          open={modalInsertar}
          onClose={abrirCerrarModalInsertar}>
              {bodyInsertar}
          </Modal>
    

    </div>
  )
}

export default Flotante