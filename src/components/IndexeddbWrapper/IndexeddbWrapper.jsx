import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import { addData, editData, getAllData } from '../../helpers/indexeddb';
import { StatusContext } from '../../context/statusContext';
import { DataContext } from '../../context/dataContext';
import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function IndexeddbWrapper() {
  let { noteId } = useParams();
  const {add, edit, changeStatus} = useContext(StatusContext);
  const {data, changeData} = useContext(DataContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    getAllData().then(data => {
      changeData(data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(edit) {
      editData(data[noteId - 1], noteId - 1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if(add) {
      const date = new Date();
      addData({date: date, markdown: ''}).then(() => {
        getAllData().then(data => {
          changeData(data);
          navigate(`/notes/${data.length}`);
          changeStatus('add');
          if (!edit) {
            changeStatus('edit');
          }
        })
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [add]);

return <div className='container'>
          <Header />
          <div className='content'>
            <Sidebar />
            <Outlet />
          </div>
  </div>
}

export default IndexeddbWrapper;