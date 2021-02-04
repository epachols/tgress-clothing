import { connect } from "react-redux";
import { DirectoryMenuContainer } from "./directory.styles";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from "../../redux/directory/directory.selectors"

import React from "react";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);