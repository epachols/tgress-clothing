import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // console.log("this idiot is the collection object", collection);
  const { title, items } = collection;
  console.log("this idiot is the collection title", title);
  console.log("this idiot is the collection items", items);
  return (
    <div className="collection-page">
      <h2 className='title'>{title}</h2>
      <div className='items'>

      {/* TODO: THIS IS LIKELY THE SOURCE OF ERROR TODO: */}
      {
        items.map(item => <CollectionItem key={item.id} item={item} />)
      }


      </div>
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
