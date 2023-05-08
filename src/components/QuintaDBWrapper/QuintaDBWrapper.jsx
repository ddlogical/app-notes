import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import Modal from '../Modal/Modal';
import getAllRecords from '../../API/getAllRecords';
import createRecord from '../../API/createRecord';
import editRecord from '../../API/editRecord';
import deleteRecord from '../../API/deleteRecord';
import { StatusContext } from '../../context/statusContext';
import { SearchContext } from '../../context/searchContext';
import { DataContext } from '../../context/dataContext';
import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function QuintaDBWrapper() {
  let { noteId } = useParams();
  const {add, edit, delete:deleteActive, changeStatus} = useContext(StatusContext);
  const {data, changeData} = useContext(DataContext);
  const { searchPhrase, searchedData, changeSearchPhrase } = useContext(SearchContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    getAllRecords().then(response => {
      const formatedData = response.records.map(elem => ({id: elem.id, date: new Date(elem.values.cnW7DvWRDdMykpbSkxWQuB), markdown: elem.values.dcPSoimCjkmi7cPuOTW495 ? elem.values.dcPSoimCjkmi7cPuOTW495 : ''}))
      changeData(formatedData.reverse());
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(deleteActive) {
      let dataToDelete = data[noteId - 1];
      if (searchPhrase !== '') {
        dataToDelete = searchedData[noteId - 1];
        changeSearchPhrase('');
      }
      deleteRecord(dataToDelete).then(() => {
        changeStatus('delete');
        getAllRecords().then(response => {
          navigate(`/notes`);
          const formatedData = response.records.map(elem => ({id: elem.id, date: new Date(elem.values.cnW7DvWRDdMykpbSkxWQuB), markdown: elem.values.dcPSoimCjkmi7cPuOTW495 ? elem.values.dcPSoimCjkmi7cPuOTW495 : ''}));
          changeData(formatedData.reverse());
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteActive]);

  useEffect(() => {
    if(edit) {
      editRecord(data[noteId - 1]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if(add) {
      changeStatus('add');
      const date = new Date();
      createRecord({date: date, markdown: ''}).then(()=> {
        getAllRecords().then(response => {
          const formatedData = response.records.map(elem => ({id: elem.id, date: new Date(elem.values.cnW7DvWRDdMykpbSkxWQuB), markdown: elem.values.dcPSoimCjkmi7cPuOTW495 ? elem.values.dcPSoimCjkmi7cPuOTW495 : ''}))
          changeData(formatedData.reverse());
          navigate(`/notes/${formatedData.length}`);
          if (!edit) {
            changeStatus('edit');
          }
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [add]);

return <div className='container'>
          <Modal />
          <Header />
          <div className='content'>
            <Sidebar />
            <Outlet />
          </div>
  </div>
}

export default QuintaDBWrapper;