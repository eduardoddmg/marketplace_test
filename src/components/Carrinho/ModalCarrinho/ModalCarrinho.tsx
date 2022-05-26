import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

interface IProps{
    open: true; 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCarrinho:React.FunctionComponent<IProps> = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" style={{color: 'green'}}>
            Sua compra foi finalizada com sucesso!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Aqui será inserido um texto com a instruções finais de compra!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalCarrinho