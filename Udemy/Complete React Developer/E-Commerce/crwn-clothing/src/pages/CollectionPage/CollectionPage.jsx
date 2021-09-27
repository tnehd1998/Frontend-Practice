import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../redux/shop/shop-selector";

import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
