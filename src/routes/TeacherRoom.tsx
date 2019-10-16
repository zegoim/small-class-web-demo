import * as React from "react";
import * as PropTypes from "prop-types";

export interface DataProps {}

export interface TeacherRoomProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class TeacherRoom extends React.Component<TeacherRoomProps> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({ styles });

    return (
      <div {...attributes} {...classes.root}>
        TeacherRoom
      </div>
    );
  }
}

function getStyles(TeacherRoom: TeacherRoom) {
  const {
    context: { theme },
    props: { style }
  } = TeacherRoom;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      ...style
    })
  };
}

export default TeacherRoom;
