import Uploader from '../src/components/uploader/Uploader.tsx'
import {useState} from 'react';
import type {IProcessedFile} from './types/types.ts';

import LayoutPicker from './components/layoutPicker/LayoutPicker.tsx';
import {templates} from './layouts/templates.ts';


function App() {
  const [files, setFiles] = useState<IProcessedFile[]>([])
  const [layout, setLayout] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Uploader files={files} setFiles={setFiles} setModalOpen={setModalOpen}/>
      {modalOpen ? <LayoutPicker layout={layout} setLayout={setLayout} templates={templates}/> : null}
    </>
  )
}

export default App
