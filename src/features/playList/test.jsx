function test() {
  return (
    <div
      class="modal show"
      id="myModal"
      style="display: block;"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">music name</h4>
            <button
              class="btn-close"
              type="button"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modalContent-body">
              <div class="modalSong-Image">
                <img
                  src="../image/music cover/Babak Jahanbakhsh - RoozHaye Abri.jpg"
                  alt=""
                  id="single-song-image"
                />
              </div>
              <div class="modalSong-info">
                <h3 class="modalSong-title" id="modalSong-title">
                  roozaye abri-1
                </h3>
                <h3 class="modalSong-artistName" id="modalSong-artistName">
                  jahanbakhsh
                </h3>
              </div>
              <audio
                src="https://dl.rozmusic.com/Music/1396/10/13/Babak%20Jahanbakhsh%20-%20Roozhaye%20Abri%20(128).mp3"
                controls="controls"
                alt=""
                class="modualSong-audio"
                id="single-song"
              ></audio>
              <div class="text">
                <p class="textContent englishFont">roozaye abri-1</p>
                <p class="textContent persionFont"> روزای ابری</p>
                <p class="textContent englishFont"> I gave you your dreams</p>
                <p class="textContent persionFont">من رویا هات رو بهت دادم</p>
                <p class="textContent englishFont"> Cause you ment the world</p>
                <p class="textContent persionFont">چون تو دنیای من بودی</p>
                <p class="textContent englishFont">
                  So did I deserve to be left in hurt
                </p>
                <p class="textContent persionFont">
                  پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری
                </p>
                <p class="textContent englishFont">So you think I don’t know</p>
                <p class="textContent persionFont">فکر می کنی نمیدونم</p>
                <p class="textContent englishFont">You’re out of control</p>
                <p class="textContent persionFont">که تو غیر قابل کنترلی</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger btnClose singleSong"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default test;
