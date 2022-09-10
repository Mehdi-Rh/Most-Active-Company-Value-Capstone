import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import Company from './components/item/Company';

// const App = () => {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={(
//           <Container fluid className="App">
//             <Home/>
//           </Container>
//         )}
//       />
//       <Route
//         path="/item"
//         element={(
//           <Container fluid className="App">
//             <Item/>
//           </Container>
//         )}
//       />
//     </Routes>
//   );
// }

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:name" element={<Company />} />
    </Routes>
  </div>
);

export default App;
