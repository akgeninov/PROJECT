// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { icon } from "../../../constants";
import React, { useState, useRef, Suspense } from "react";
import AdminHeader from "../../global-component/admin-header/AdminHeader";
import {
  EditorState,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { FormEvent, useEffect } from "react";
import toolbarStyles from "../../global-component/admin-toolbar-style/toolbarStyles";
const Editor = React.lazy(
  () => import('react-draft-wysiwyg').then(module => ({ default: module.Editor }))
);



function KarirForm({edit}) {
  
  const [persyaratanState, setPersyaratanState] = useState(EditorState.createEmpty());
  const [deskripsiState, setDeskripsiState] = useState(EditorState.createEmpty());
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      setLoaded(true);
  },[])
  return (
    <div className="w-4/5 min-[320px]:max-md:w-[90%] flex flex-col grow-0 px-28 py-8 min-[320px]:max-md:py-2 md:max-lg:px-16 min-[320px]:max-md:px-1">
      {edit ? 
       <AdminHeader title="Lowongan" /> :

      (
        <AdminHeader title="Tambah Lowongan" />
      )}
      <form action="">
        {edit && (
          <div className="flex flex-row gap-5 mb-8 justify-center md:justify-start ">
          <button className="flex flex-row w-fit h-fit items-center gap-3 border-2 border-black p-2 rounded-xl min-[320px]:max-md:border-b-4 min-[320px]:max-md:border-r-4">
            <img
              src={icon.iconEditSquare}
              alt="iconedit"
              className="w-8 h-8 min-[320px]:max-md:w-6 min-[320px]:max-md:h-6"
              />
            <p className="font-heebo text-[20px] min-[425px]:max-md:text-[15px] min-[320px]:max-[425px]:text-[14px] font-bold">
              Edit Lowongan
            </p>
          </button>
          <button className="flex flex-row w-fit h-fit items-center gap-3 border-2 border-black p-2 rounded-xl min-[320px]:max-md:border-b-4 min-[320px]:max-md:border-r-4">
            <img
              src={icon.iconDelete}
              alt="iconedit"
              className="w-8 h-8 min-[320px]:max-md:w-6 min-[320px]:max-md:h-6"
              />            
            <p className="font-heebo text-[20px] min-[425px]:max-md:text-[15px] min-[320px]:max-[425px]:text-[14px] font-bold">
              Hapus Lowongan
            </p>
          </button>
        </div>
        )}
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Posisi</p>
          <input
            type="text"
            className="my-2 w-full h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Bidang</p>
          <input
            type="text"
            className="my-2 w-full h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Waktu Pekerjaan</p>
          <input
            type="text"
            className="my-2 w-full h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Tempat Bekerja</p>
          <input
            type="text"
            className="my-2 w-full h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Kriteria</p>
          <input
            type="text"
            className="my-2 w-full h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Deskripsi Pekerjaan</p>
          <div className="resize-none my-2 w-full px-2 py-2 bg-transparent border border-gray-400 rounded-md">
            <Suspense fallback={<div>............</div>}>
            {/* {loaded && ( */}

            
            <Editor
                editorState={deskripsiState}

                onEditorStateChange={setDeskripsiState}
                toolbarClassName=""
                toolbarStyle={toolbarStyles}
                toolbar={{
                  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'history'],
                  textAlign: {
                    inDropdown: true,
                    className: undefined,
                    component: undefined,
                    dropdownClassName: undefined,
                    options: ['left', 'center', 'right', 'justify'],
                    left: { className: undefined },
                    center: { className: undefined },
                    right: { className: undefined },
                    justify: { className: undefined },
                  },
                    inline: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['bold', 'italic', 'underline', 'strikethrough'],
                      bold: { className: undefined },
                      italic: {className: undefined },
                      underline: {className: undefined },
                      strikethrough: {className: undefined },
                    },
                    blockType: {
                      inDropdown: true,
                      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontSize: {
                      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontFamily: {
                      options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    list: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['unordered', 'ordered'],
                      unordered: {className: undefined },
                      ordered: {className: undefined },
                      indent: {className: undefined },
                      outdent: {className: undefined },
                    },
                    history: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['undo', 'redo'],
                      undo: {className: undefined },
                      redo: {className: undefined },
                    },

                }}
              />
              {/* )} */}
              </Suspense>
          </div>
        </div>
        <div className="my-4">
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Persyaratan</p>
          <div className="resize-none my-2 w-full px-2 py-2 bg-transparent border border-gray-400 rounded-md">
            <Suspense fallback={<div>............</div>}>
            <Editor
                editorState={persyaratanState}

                onEditorStateChange={setPersyaratanState}
                toolbarClassName=""
                toolbarStyle={toolbarStyles}
                toolbar={{
                  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'history'],
                  textAlign: {
                    inDropdown: true,
                    className: undefined,
                    component: undefined,
                    dropdownClassName: undefined,
                    options: ['left', 'center', 'right', 'justify'],
                    left: { className: undefined },
                    center: { className: undefined },
                    right: { className: undefined },
                    justify: { className: undefined },
                  },
                    inline: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['bold', 'italic', 'underline', 'strikethrough'],
                      bold: { className: undefined },
                      italic: {className: undefined },
                      underline: {className: undefined },
                      strikethrough: {className: undefined },
                    },
                    blockType: {
                      inDropdown: true,
                      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontSize: {
                      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    fontFamily: {
                      options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                    list: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['unordered', 'ordered'],
                      unordered: {className: undefined },
                      ordered: {className: undefined },
                      indent: {className: undefined },
                      outdent: {className: undefined },
                    },
                    history: {
                      inDropdown: false,
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ['undo', 'redo'],
                      undo: {className: undefined },
                      redo: {className: undefined },
                    },

                }}
              />
              </Suspense>
          </div>
        </div>
        <div className="flex my-12 justify-center" >
        <button
          type="submit"
          className="w-1/4 min-[320px]:max-xl:w-1/2 h-16 bg-whiteSmoke500 rounded-2xl border border-black shadow-xl "
        >
          <p className="font-heebo text-[20px] min-[425px]:max-md:text-[18px] min-[320px]:max-[425px]:text-[16px] font-bold">Submit</p>
        </button>
        </div>
      </form>
    </div>
  );
}

export default KarirForm;