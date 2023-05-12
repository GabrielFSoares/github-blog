import { Routes, Route } from 'react-router-dom'
import { Publications } from './pages/Publications'
import { Post } from './pages/Post/indext'
import { DefaultLayout } from './layouts/DefaultLayout/indext'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Publications />}></Route>
        <Route path="post" element={<Post />} />
      </Route>
    </Routes>
  )
}
