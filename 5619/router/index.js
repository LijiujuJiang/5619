import App from '../App'
import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/home'
import Forget from '../pages/forget'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget" element={<Forget />} />
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter