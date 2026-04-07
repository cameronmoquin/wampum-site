import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Wampum from './pages/Wampum'
import FieldGuide from './pages/FieldGuide'
import FireCraft from './pages/FireCraft'
import MedicinalPlants from './pages/MedicinalPlants'
import WildFoods from './pages/WildFoods'
import CommunityGardens from './pages/CommunityGardens'
import Community from './pages/Community'
import Library from './pages/Library'
import WaterSafety from './pages/WaterSafety'
import Shelter from './pages/Shelter'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="wampum" element={<Wampum />} />
        <Route path="field-guide" element={<FieldGuide />} />
        <Route path="field-guide/fire" element={<FireCraft />} />
        <Route path="field-guide/medicinal-plants" element={<MedicinalPlants />} />
        <Route path="field-guide/wild-foods" element={<WildFoods />} />
        <Route path="field-guide/community-gardens" element={<CommunityGardens />} />
        <Route path="field-guide/water" element={<WaterSafety />} />
        <Route path="field-guide/shelter" element={<Shelter />} />
        <Route path="community" element={<Community />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  )
}
