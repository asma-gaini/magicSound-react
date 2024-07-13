import { useState } from "react";
import { Link } from "react-router-dom";

import "./uploaderMusic.css";

function UploaderMusic() {
  const [songName, setSongName] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songLink, setSongLink] = useState("");
  const [songLanguage, setSongLanguage] = useState("");

  return (
    <div className="container mt-bg">
      <div className="row">
        <div className="col-10">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="songName" className="form-label">
                Song name:
              </label>
              <input
                type="text"
                className="form-control inputUploader uploaderInputLine"
                id="songName"
                placeholder="Enter Song Name"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="artistName" className="form-label">
                Artist name:
              </label>
              <input
                type="text"
                className="form-control uploaderInputLine"
                id="artistName"
                placeholder="Enter Artist Name"
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="musicAddress" className="form-label">
                Music address:
              </label>
              <input
                type="text"
                className="form-control uploaderInputLine"
                id="musicAddress"
                placeholder="Link Address"
                value={songLink}
                onChange={(e) => setSongLink(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="imageUplode" className="form-label">
                image:
              </label>
              <input
                type="file"
                className="form-control uploaderInputLine"
                id="imageUplode"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="language" className="form-label">
                Language
              </label>
              <select
                className="form-select"
                id="language"
                value={songLanguage}
                onChange={(e) => setSongLanguage(e.target.value)}
              >
                <option selected="selected">Choose...</option>
                <option className="English" lannumber="1">
                  English
                </option>
                <option className="persian" lannumber="2">
                  persian
                </option>
                <option className="china" lannumber="3">
                  china
                </option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                />
                <label htmlFor="agree" className="form-check-label">
                  I Agree all the information is correct
                </label>
              </div>
            </div>
            <div className="col-12 btnSection">
              <button type="submit" className="btn btn-primary">
                Uploade
              </button>
              <Link className="backBtn" to="/">
                back to play list
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploaderMusic;
