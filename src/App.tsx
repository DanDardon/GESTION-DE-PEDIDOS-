import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderManagement from './pages/OrderManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<OrderManagement rolId="1" />} />
            <Route path="/manage-orders" element={<OrderManagement rolId="1" />} />
            <Route path="/manage-orders/:orderId" element={<OrderManagement rolId="1" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;