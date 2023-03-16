import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

interface ConfirmModalProps {
  showConfirmModal: boolean
  onCloseModalLogout: () => void
  onConfirmModalLogout: () => void
}

export default function ConfirmModal({
  showConfirmModal,
  onCloseModalLogout,
  onConfirmModalLogout
}: ConfirmModalProps) {
  return (
    <Dialog open={showConfirmModal} onClose={onCloseModalLogout} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">{'Logout'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure logout ?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModalLogout}>
          <CloseIcon />
        </Button>
        <Button onClick={onConfirmModalLogout}>
          <CheckIcon />
        </Button>
      </DialogActions>
    </Dialog>
  )
}
