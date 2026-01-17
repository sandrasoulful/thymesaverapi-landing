import { Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home"
import { CheckoutSuccess } from "@/pages/CheckoutSuccess"
import { CheckoutCancel } from "@/pages/CheckoutCancel"
import { NotFound } from "@/pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/checkout/cancel" element={<CheckoutCancel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
