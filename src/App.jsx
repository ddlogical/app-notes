import IndexeddbWrapper from "./components/IndexeddbWrapper/IndexeddbWrapper";
import { StatusContextProvider } from "./context/statusContext";
import { DataContextProvider } from "./context/dataContext";
import { ModalContextProvider } from "./context/modalContext";

function App() {
  return (
    <div className='App'>
      <DataContextProvider>
        <StatusContextProvider>
        <ModalContextProvider>
          <IndexeddbWrapper />
        </ModalContextProvider>
        </StatusContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
