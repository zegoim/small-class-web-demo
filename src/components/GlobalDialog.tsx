import * as React from "react";
import * as PropTypes from "prop-types";
import ContentDialog, { ContentDialogProps } from "react-uwp/ContentDialog";

export interface DialogProps extends ContentDialogProps {
  isPrevSaved?: boolean;
}

export interface GlobalDialogState {
  dialogProps?: DialogProps;
}

export interface GlobalDialogProps extends DialogProps, React.HTMLAttributes<HTMLDivElement> {}

export class GlobalDialog extends React.Component<GlobalDialogProps, GlobalDialogState> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: GlobalDialogState = {};
  static defaultProps: GlobalDialogProps = {
    primaryButtonText: "取消",
    secondaryButtonText: "确定"
  };

  setDialogProps = (dialogProps?: DialogProps) => {
    if (dialogProps.isPrevSaved) {
      this.notConfirmedProps.push(dialogProps);
    }
    this.setState({ dialogProps });
  }

  removePrevProps = (props: DialogProps) => {
    const index = this.notConfirmedProps.indexOf(props);
    if (index > -1) {
      this.notConfirmedProps.splice(index, 1);
    }
  }

  notConfirmedProps: DialogProps[] = [];
  closeDialog = () => {
    const propsSize = this.notConfirmedProps.length;
    const { dialogProps } = this.state;
    if (dialogProps.isPrevSaved) {
      this.removePrevProps(dialogProps);
    }

    this.setState({
      dialogProps: {
        ...dialogProps,
        defaultShow: false
      }
    }, propsSize > 0 ? () => {
      const prevDialogProps = this.notConfirmedProps.slice(-1)[0];
      if (prevDialogProps) {
        this.setState({ dialogProps: prevDialogProps });
        this.notConfirmedProps.splice(propsSize - 1, propsSize);
      }
    } : void 0);
  }

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({
      className: "GlobalDialog",
      styles
    });
    const { dialogProps } = this.state;
    const { isPrevSaved, ...originProps } = dialogProps || {} as DialogProps;

    return (
      <ContentDialog
        showCloseButton
        {...originProps}
        primaryButtonText={originProps.primaryButtonText === void 0 ? this.props.primaryButtonText : originProps.primaryButtonText}
        secondaryButtonText={originProps.secondaryButtonText === void 0 ? this.props.secondaryButtonText : originProps.primaryButtonText}
        primaryButtonAction={(e) => {
          this.closeDialog();
          if (originProps.primaryButtonAction) {
            originProps.primaryButtonAction(e);
          }
        }}
        secondaryButtonAction={(e) => {
          this.closeDialog();
          if (originProps.secondaryButtonAction) {
            originProps.secondaryButtonAction(e);
          }
        }}
        closeButtonAction={(e) => {
          this.closeDialog();
          if (originProps.closeButtonAction) {
            originProps.closeButtonAction(e);
          }
        }}
        onCloseDialog={() => {
          this.closeDialog();
          if (dialogProps.onCloseDialog) dialogProps.onCloseDialog();
        }}
      />
    );
  }
}

function getStyles(GlobalDialog: GlobalDialog) {
  const {
    context: { theme },
    props: { style }
  } = GlobalDialog;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      ...style
    })
  };
}

export default GlobalDialog;
