import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import "./uploaderMusic.css";

const fakeUploadMusic = [
  {
    songName: "baran",
    artistName: "jahanbakhsh",
    linkMusic: ".//sjlk",
    image: ".//",
    language: "english",
  },
];
function UploaderMusic() {
  const uploader = fakeUploadMusic;
  return (
    <div class="container mt-bg">
      <div class="row">
        <div class="col-10">
          <Form method="POST" class="row g-3">
            <div class="col-md-6">
              <label htmlFor="songName" class="form-label">
                Song name:
              </label>
              <input
                type="text"
                class="form-control inputUploader"
                id="songName"
                placeholder="Enter Song Name"
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
              <select class="form-select" id="language">
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
            <div class="col-12">
              {/* <input
                type="hidden"
                name="uploader"
                value={JSON.stringify(uploader)}
              /> */}
              <button type="submit" class="btn btn-primary">
                Uploade music
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
}
export default UploaderMusic;
