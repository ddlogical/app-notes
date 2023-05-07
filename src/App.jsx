import IndexeddbWrapper from "./components/IndexeddbWrapper/IndexeddbWrapper";
import { StatusContextProvider } from "./context/statusContext";
import { DataContextProvider } from "./context/dataContext";

function App() {
  return (
    <div className='App'>
      <DataContextProvider>
        <StatusContextProvider>
          <IndexeddbWrapper />
        </StatusContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
