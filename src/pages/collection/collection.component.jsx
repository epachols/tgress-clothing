import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>collection page</h2>
    </div>
  );
};

// note- in order to map state to props here, we need to pass the second optional argument to map state to props as ownProps (the props belonging to the present component)
const mapStateToProps = (state, ownProps) => {
  return ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  });
};

export default connect(mapStateToProps)(CollectionPage);
