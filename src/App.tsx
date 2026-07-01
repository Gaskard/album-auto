import Uploader from '../src/components/uploader/Uploader.tsx'
import {useState} from 'react';
import type {IProcessedFile} from './types/types.ts';
import LayoutPicker from './components/layoutPicker/LayoutPicker.tsx';

function App() {
  const [files, setFiles] = useState<IProcessedFile[]>([])
  const [layout, setLayout] = useState<string | null>(null)

  return (
    <>
      <Uploader files={files} setFiles={setFiles} />
      <LayoutPicker layout={layout} setLayout={setLayout}/>
    </>
  )
}

export default App
