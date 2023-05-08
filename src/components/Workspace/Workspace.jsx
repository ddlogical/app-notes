import styles from './Workspace.module.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { StatusContext } from '../../context/statusContext';
import { DataContext } from '../../context/dataContext';
import { SearchContext } from '../../context/searchContext';
import MarkdownIt from 'markdown-it';
import { useState, useEffect, useContext } from 'react';

const md = new MarkdownIt();

function Workspace({type}) {
  let { noteId } = useParams();
  const {data, changeData} = useContext(DataContext);
  const {searchPhrase, searchedData} = useContext(SearchContext);
  const [noteData, setNoteData] = useState(null);
  const {edit} = useContext(StatusContext);

  useEffect(() => {
    if(searchPhrase !== '') {
      setNoteData(searchedData[noteId - 1]);
    } else if(data) {
      setNoteData(data[noteId - 1]);
    }
  }, [data, noteId, searchedData, searchPhrase]);

  let visibleElem;

  if(type === 'empty') {
    visibleElem = null;
  } else {
    if(edit) {
      visibleElem = <textarea 
      className={styles.workSpaceTextEdit}
      value={noteData ? noteData.markdown : ''} 
      onChange={handleMarkdownChange}
      autoFocus
      ></textarea>
    } else {
      visibleElem =<div className={styles.workSpaceText} dangerouslySetInnerHTML={{ __html: noteData ? md.render(noteData.markdown) : '' }}></div>
    }
  }

  function handleMarkdownChange(event) {
    const markdown = event.target.value;
    const newData = [...data];
    newData[noteId - 1].markdown = markdown;
    changeData(newData);
  }

  return <main className={styles.workSpace}>
    <div className={styles.workSpaceDate}>
      {noteData && 
        noteData.date.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
      })}
    </div>
    {visibleElem}
  </main>
}

export default Workspace;

Workspace.propTypes = {
  type: PropTypes.string,
};
