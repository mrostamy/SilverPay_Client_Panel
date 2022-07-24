import { DragEventHandler } from "react";

export type useFileUploadHook = {
    files: File[];
    fileNames: string[];
    fileTypes: string[];
    totalSize: string;
    totalSizeInBytes: number;
    clearAllFiles: () => void;
    createFormData: () => FormData;
    handleDragDropEvent: (e: Event) => void | DragEventHandler<HTMLDivElement>;
    removeFile: (file: number | string) => void;
    setFiles: (e: Event) => void;
  };