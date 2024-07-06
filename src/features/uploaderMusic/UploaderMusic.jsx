import { useState } from "react";
import { Link } from "react-router-dom";

import "./uploaderMusic.css";

function UploaderMusic() {
  const [songName, setSongName] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songLink, setSongLink] = useState("");
  const [songLanguage, setSongLanguage] = useState("");

  return (
    <div class="container mt-bg">
      <div class="row">
        <div class="col-10">
          <form class="row g-3">
            <div class="col-md-6">
              <label htmlFor="songName" class="form-label">
                Song name:
              </label>
              <input
                type="text"
                class="form-control inputUploader"
                id="songName"
                placeholder="Enter Song Name"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label htmlFor="artistName" class="form-label">
                Artist name:
              </label>
              <input
                type="text"
                class="form-control"
                id="artistName"
                placeholder="Enter Artist Name"
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
              />
            </div>
            <div class="col-12">
              <label htmlFor="musicAddress" class="form-label">
                Music address:
              </label>
              <input
                type="text"
                class="form-control"
                id="musicAddress"
                placeholder="Link Address"
                value={songLink}
                onChange={(e) => setSongLink(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label htmlFor="imageUplode" class="form-label">
                image:
              </label>
              <input type="file" class="form-control" id="imageUplode" />
            </div>
            <div class="col-md-4">
              <label for="language" class="form-label">
                Language
              </label>
              <select
                class="form-select"
                id="language"
                value={songLanguage}
                onChange={(e) => setSongLanguage(e.target.value)}
              >
                <option selected="selected">Choose...</option>
                <option class="English" lannumber="1">
                  English
                </option>
                <option class="persian" lannumber="2">
                  persian
                </option>
                <option class="china" lannumber="3">
                  china
                </option>
              </select>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="agree" />
                <label htmlFor="agree" class="form-check-label">
                  I Agree all the information is correct
                </label>
              </div>
            </div>
            <div class="col-12 btnSection">
              {/* <input
                type="hidden"
                name="uploader"
                value={JSON.stringify(uploader)}
              /> */}
              <button type="submit" class="btn btn-primary">
                Uploade 
              </button>
              <Link className="backBtn" to="/"> back to play list</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploaderMusic;
