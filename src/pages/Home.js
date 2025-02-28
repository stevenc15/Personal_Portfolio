//import AboutImage from './AboutImage.png';
//import ExampleImage from './exampleImage.png';
import {useApp} from '../components/appContext.js'

const HomePage = () => {
    const {setCurrentPage} = useApp();

    return (
    //main container
    <div className="min-h-screen bg-black text-white pt-24">
      {/* secondary container */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Central Main Statement*/}
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-8">Steven Camacho</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Aspiring Engineer and avid Learner.
          </p>
        </section>

        {/* Place contact links and info below*/}
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-8">Checkout my Links!</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Email, GitHub, Linkedin, Indeed
          </p>
        </section>
      </div>
    </div>
    )
};


export default HomePage;