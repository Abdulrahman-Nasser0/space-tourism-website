import "./App.css";

import { NavigationProvider } from "./components/NavigationContext";
import Website from "./components/Website";

function App() {
  return (
    <NavigationProvider>
      <Website />
    </NavigationProvider>
  );
}

export default App;
