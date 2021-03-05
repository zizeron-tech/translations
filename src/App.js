import TagTrans from './lib/TagTrans'
import LanguageSelector from './components/LanguageSelector';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="App">
      <div>
        <TagTrans tag="home_h1" />
      </div>
      <div>
        <TagTrans tag="home_desc" />
      </div>
      <div>
        <TagTrans tag="home_legal" />
      </div>
      <div>
        <TagTrans tag="results_count_text" number="2" total="10" />
      </div>
      <div>
        <FormInput placeholderTranslationTag="contact_form_name_placeholder" />
      </div>
      <div>
        <LanguageSelector/>
      </div>
    </div>
  );
}

export default App;
