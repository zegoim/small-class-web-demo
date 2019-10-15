interface DialogProps extends ReactUWP.ContentDialogProps {
    notPrevSaved?: boolean;
}

interface Window {
    setDialog: (dialogProps?: DialogProps) => void;
}