import * as React from "react";
import * as PropTypes from "prop-types";

export interface DataProps {}

export interface StudentRoomProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class StudentRoom extends React.Component<StudentRoomProps> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({ styles });

    return (
      <div {...attributes} {...classes.root}>
        StudentRoom
      </div>
    );
  }
}

function getStyles(StudentRoom: StudentRoom) {
  const {
    context: { theme },
    props: { style }
  } = StudentRoom;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      ...style
    })
  };
}

export default StudentRoom;
