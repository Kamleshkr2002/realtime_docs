import React from 'react'
import Editor from './editor';
import Toolbar from './toolbar';
interface DocumentParams {
    params: Promise<{ documentId: string }>;
}

const Document = async ({params}: DocumentParams) => {
    const { documentId } = await params;
  return (
    <div className="bg-[#fafbfd] min-h-screen">
        <Toolbar/>
        <Editor /> 

    </div>
  )
}

export default Document