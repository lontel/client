import { Routes, Route } from 'react-router-dom'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<h1>Soy el inicio</h1>} />
            <Route path='/events' element={<h1>Soy los eventos</h1>} />
            <Route path='/events/create' element={<h1>Crea tus eventos</h1>} />
            <Route path='/events/details/:id' element={<h1>Detalle del evento</h1>} />
        </Routes>
    )
}
export default AppRoutes

