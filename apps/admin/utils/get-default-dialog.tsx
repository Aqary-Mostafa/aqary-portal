import { Button } from '@mui/material';

export const getDefaultDeleteDialog = {
  content: `Are you sure to delete?`,
  confirmButton: <Button variant='contained'>yes</Button>,
  cancelButton: (
    <Button variant='outlined' color='error'>
      no
    </Button>
  ),
  dialogPaperProps: {
    className: 'delete-dialog',
    sx: { color: 'text.primary' },
  },
};

export const getDefaultRestoreDialog = {
  content: `Are you sure to restore?`,
  confirmButton: <Button variant='contained'>yes</Button>,
  cancelButton: (
    <Button variant='outlined' color='error'>
      no
    </Button>
  ),
  dialogPaperProps: {
    className: 'delete-dialog',
    sx: { color: 'text.primary' },
  },
};

export const getDefaultRefresheDialog = {
  content: `Are you sure to refresh?`,
  confirmButton: <Button variant='contained'>yes</Button>,
  cancelButton: (
    <Button variant='outlined' color='error'>
      no
    </Button>
  ),
  dialogPaperProps: {
    className: 'delete-dialog',
    sx: { color: 'text.primary' },
  },
};

export const getDefaultStopRefresheDialog = {
  content: `Are you sure to stop auto Refresh?`,
  confirmButton: <Button variant='contained'>yes</Button>,
  cancelButton: (
    <Button variant='outlined' color='error'>
      no
    </Button>
  ),
  dialogPaperProps: {
    className: 'delete-dialog',
    sx: { color: 'text.primary' },
  },
};

export const getDefaultActiveDialog = {
  content: `Are you sure to change status`,
  confirmButton: <Button variant='contained'>yes</Button>,
  cancelButton: (
    <Button variant='outlined' color='error'>
      no
    </Button>
  ),
  dialogPaperProps: {
    className: 'delete-dialog',
    sx: { color: 'text.primary' },
  },
};
