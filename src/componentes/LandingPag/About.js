<<<<<<< HEAD
const About = () => {
    return (
      <section id="about" className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">¿Qué es Hello I'm!?</h2>
        <p className="mt-2 text-gray-600">Es una plataforma que te permite crear un portafolio profesional sin necesidad de programar.</p>
      </section>
    );
  };
  
  export default About;
  
=======
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); 

  return (
    <section id="about" className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold">
        {t("¿Qué es Hello I'm!?")}
      </h2>
      <p className="mt-2 text-gray-600">
        {t("Es una plataforma que te permite crear un portafolio profesional sin necesidad de programar.")}
      </p>
    </section>
  );
};

export default About;
>>>>>>> 0f8099d (Implementacion de traduccion)
