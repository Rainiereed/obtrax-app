const touchData = { touching: false, trace: [] };

function* idGenerator() {
  let start = 0;
  while (true) {
    yield start;
    start += 1;
  }
}

const callbacks = {
  onSlideUpPage: { generator: idGenerator(), callbacks: {} },
  onSlideDownPage: { generator: idGenerator(), callbacks: {} }
};

function onTouchStart(evt) {
  if (evt.touches.length !== 1) {
    touchData.touching = false;
    touchData.trace = [];
    return;
  }
  touchData.touching = true;
  touchData.trace = [{ x: evt.touches[0].screenX, y: evt.touches[0].screenY }];
}

function onTouchMove(evt) {
  if (!touchData.touching) return;
  touchData.trace.push({
    x: evt.touches[0].screenX,
    y: evt.touches[0].screenY
  });
}

function onTouchEnd() {
  if (!touchData.touching) return;
  let trace = touchData.trace;
  touchData.touching = false;
  touchData.trace = [];
  handleTouch(trace);
}

function handleTouch(trace) {
  let start = trace[0];
  let end = trace[trace.length - 1];
  if (end.y - start.y > 200) {
    Object.keys(callbacks.onSlideUpPage.callbacks).map(key =>
      callbacks.onSlideUpPage.callbacks[key]()
    );
  } else if (start.y - end.y > 200) {
    Object.keys(callbacks.onSlideDownPage.callbacks).map(key =>
      callbacks.onSlideDownPage.callbacks[key]()
    );
  }
}

function addSlideUpPage(f) {
  let key = callbacks.onSlideUpPage.generator.next().value;
  callbacks.onSlideUpPage.callbacks[key] = f;
  return key;
}

function addSlideDownPage(f) {
  let key = callbacks.onSlideDownPage.generator.next().value;
  callbacks.onSlideDownPage.callbacks[key] = f;
  return key;
}

function removeSlideUpPage(key) {
  delete callbacks.onSlideUpPage.callbacks[key];
}

function removeSlideDownPage(key) {
  delete callbacks.onSlideDownPage.callbacks[key];
}

export default {
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  addSlideDownPage,
  addSlideUpPage,
  removeSlideDownPage,
  removeSlideUpPage
};
