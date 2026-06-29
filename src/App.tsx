import Uploader from '../src/components/uploader/Uploader.tsx'
import {useState} from 'react';
import type {IProcessedFile} from './types/types.ts';

function App() {
  const [files, setFiles] = useState<IProcessedFile[]>([])

  return (
    <Uploader files={files} setFiles={setFiles} />
  )
}

export default App
