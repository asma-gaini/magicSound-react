import "./flashCard.css";
import { songs_data } from "../../utils/constants";

function FlashCard({ id, setShowFlashCard, showFlashCard }) {
  function handleCloseFlashCard() {
    setShowFlashCard(false);
  }
  return (
    <div
      className={`"modalword fademodalword" ${
        showFlashCard === true ? "show" : "false"
      }`}
      id="modalword"
    >
      <div class="modalword-dialog">
        <div class="modalword-content">
          <div class="modalword-header">
            <div class="modalword-title fs-5">Difficult Words</div>
            <button
              class="btn-close"
              type="button"
              onclick={() => handleCloseFlashCard()}
            ></button>
          </div>
          <div class="modalword-body">
            <h5 class="p-2">Previous words</h5>
            <table class="table table-success table-striped-columns">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Word</th>
                  <th scope="col">Mean</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>song1 w1</td>
                  <td>آهنگ 1 ، کلمه1</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>song1 w2</td>
                  <td>آهنگ 1 ، کلمه2</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h5 class="headerAddWord">add difficult word</h5>
            <div class="wordForm">
              <div class="formWordLine">
                <label for="word" class="form-label">
                  word:
                </label>
                <input
                  type="text"
                  class="form-control inputUploader"
                  id="word"
                  placeholder="Enter difficult word"
                />
              </div>
              <div class="formWordLine">
                <label for="mean" class="form-label">
                  mean:
                </label>
                <input
                  type="text"
                  class="form-control inputUploader"
                  id="mean"
                  placeholder="Enter mean of word"
                />
              </div>
              <div class="sendWord">
                <button type="submit" class="btn btn-primary btnSendWord">
                  Send word
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
