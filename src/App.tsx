import MainLayout from "./components/MainLayout";
import TanstackProvider from "./providers/TanstackProvider";

function App() {
  return (
    <TanstackProvider>
      <MainLayout />
    </TanstackProvider>
  );
}

export default App;
