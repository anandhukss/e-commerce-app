import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((data, idx) => idx < 4)
          .map((item, index) => {
            return <CollectionItem key={index} {...item}></CollectionItem>;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
