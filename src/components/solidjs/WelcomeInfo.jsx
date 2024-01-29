import { welcomeInfoStatus } from "../../store";

const WelcomeInfo = () => {
  const [infoStatus, infoStatusSet] = welcomeInfoStatus;

  return (
    <div
      class={
        "fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center transition-all duration-700 bg-white/80 " +
        (infoStatus.status ? "invisible opacity-0" : "")
      }
    >
      <div class="z-50 absolute mx-3 md:mx-10 max-w-4xl text-base md:text-lg font-medium text-justify flex flex-col items-center justify-center gap-4">
        <div>
          Ta strona jest jedynie autorską reitaracją{" "}
          <span class="font-bold underline hover:text-blue-800">
            <a href="https://inglot.pl" target="_blank">
              obecnie istniejącej strony
            </a>
          </span>
          . Nie jest ona prawdziwym, funkcjonalnym sklepem. Wszystkie obrazki znajdujące się na tej stronie są
          własnością firmy Inglot. W celu skontaktowania się, proszę o kontakt drogą mailową, na adres podany na{" "}
          <span class="font-bold underline hover:text-blue-800">
            <a href="https://www.jakubkrwawicz.pl" target="_blank">
              mojej <span class="whitespace-nowrap">stronie-portfolio</span>
            </a>
          </span>
          .
        </div>
        <button class="p-2 border-2 border-gray-400 rounded-full mx-auto" onClick={() => infoStatusSet("status", true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        class="backdrop-blur-lg h-full w-full -z-50 cursor-pointer"
        onClick={() => infoStatusSet("status", true)}
      ></div>
    </div>
  );
};

export default WelcomeInfo;
