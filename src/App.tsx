/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import DeniedPage from './pages/DeniedPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagoexitoso" element={<SuccessPage />} />
        <Route path="/pagodenegado" element={<DeniedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
