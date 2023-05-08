import IndexeddbWrapper from './components/IndexeddbWrapper/IndexeddbWrapper';
import QuintaDBWrapper from './components/QuintaDBWrapper/QuintaDBWrapper';
import { StatusContextProvider } from './context/statusContext';
import { DataContextProvider } from './context/dataContext';
import { ModalContextProvider } from './context/modalContext';
import { SearchContextProvider } from './context/searchContext';
import { MenuContextProvider } from './context/menuContext';
{/* <QuintaDBWrapper /> */}
function App() {
  return (
    <div className='App'>
      <DataContextProvider>
        <StatusContextProvider>
          <ModalContextProvider>
            <SearchContextProvider>
              <MenuContextProvider>
                <IndexeddbWrapper />
              </MenuContextProvider>
            </SearchContextProvider>
          </ModalContextProvider>
        </StatusContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
