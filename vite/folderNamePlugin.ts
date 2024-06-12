import path from "path";

interface Plugin {
  name: string;
  renderChunk(code: string, chunk: Chunk): void | null;
}

interface Chunk {
  facadeModuleId?: string;
  fileName: string;
}

const folderNamePlugin: Plugin = {
  name: "folder-name-plugin",
  renderChunk(code, chunk) {
    const filePath = chunk.facadeModuleId;
    if (!filePath) return null;

    const folderName = path.basename(path.dirname(filePath));

    if (filePath.includes("/apps/")) {
      chunk.fileName = `${folderName}.js`;
    }

    return null;
  },
};

export default folderNamePlugin;
