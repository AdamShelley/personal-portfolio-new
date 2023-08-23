import { SetVideo } from "../../styles/PageStyles";
import { ParagraphStyles, ButtonContainer } from "../../styles/styles";

import { BiDownload } from "react-icons/bi";

// TODO: Download link, move to external .env
const lang_ai_android_build =
  "https://expo.dev/artifacts/eas/orrFY1zaCWqs4nmtxiNE9q.apk";

const AndroidDownload = () => (
  <>
    <ParagraphStyles>
      <span id="download">Android Download</span>
    </ParagraphStyles>
    <ParagraphStyles className="top-section">
      <div>
        <p>You can download the .apk file below to try on android phones.</p>
        <h3 className="mt-2">Features</h3>
        <ul>
          <li>Stories and Pictures generated by AI.</li>
          <li>
            Tap to translate unfamiliar words for instant English translations.
          </li>
          <li>
            Stories can be filtered by genre and level for a tailored reading
            experience.
          </li>
          <li>
            User-driven narratives, stories can be voted on by users for a more
            interactive experience.
          </li>
          <li>Dark mode and Light mode.</li>
        </ul>
        <h3 className="mt-2">Known Issues</h3>
        <ul>
          <li>
            Not fully optimized, especially for very small/large android phones.
          </li>
          <li>
            Some punctuation issues depending on AI model. Calibration needed.
          </li>
          <li>Light mode needs further testing.</li>
          <li>Icons are WIP.</li>
        </ul>
        <br />
        <ButtonContainer>
          <a
            href={lang_ai_android_build}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download .APK file for android."
          >
            <BiDownload />
            Download .APK
          </a>
        </ButtonContainer>
        <p style={{ marginTop: "1rem", fontWeight: 100 }}>
          Thank you for testing my app.
        </p>
        <p className="mt-2" style={{ fontWeight: 300 }}>
          Note - you might get a warning from Google Play Protect as this app is
          not yet on the Play Store.
        </p>
      </div>
      <div className="top-section-image">
        <SetVideo autoPlay muted loop playsInline>
          <source src={`../../assets/LangAI/intro.mp4`} type="video/mp4" />
          Video not supported
        </SetVideo>
      </div>
    </ParagraphStyles>
  </>
);

export default AndroidDownload;
