import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";

export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
