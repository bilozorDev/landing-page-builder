import { ContentBlock } from "./allAvailableOptions.t";

const createDataObject = (contentBlocks: ContentBlock[]) => {
  return contentBlocks.reduce((acc, block) => {
    acc[block.blockName] = block;
    return acc;
  }, {} as Record<string, ContentBlock>);
};
export { createDataObject };
