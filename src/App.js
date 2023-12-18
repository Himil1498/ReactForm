import './App.css';
import CommentReview from './Components/CommentReview';
import FormClass from './Components/FormClass';
import FormFunctional from './Components/FormFunctional';

function App() {
  return (
    <div className="App">
      <FormClass/>
      <hr/>
      <hr/>
      <FormFunctional/>
      <hr/>
      <hr/>
      <CommentReview/>
    </div>
  );
}

export default App;
