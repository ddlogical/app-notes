import IndexeddbWrapper from "./components/IndexeddbWrapper/IndexeddbWrapper";
import { StatusContextProvider } from "./context/statusContext";
import { DataContextProvider } from "./context/dataContext";
import { ModalContextProvider } from "./context/modalContext";
import { SearchContextProvider } from "./context/searchContext";

function App() {
  return (
    <div className='App'>
      <DataContextProvider>
        <StatusContextProvider>
          <ModalContextProvider>
            <SearchContextProvider>
              <IndexeddbWrapper />
            </SearchContextProvider>
          </ModalContextProvider>
        </StatusContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
