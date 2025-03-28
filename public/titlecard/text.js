/// (c) Ken Fyrstenberg Nilsen, Abidas Software .com
/// License: CC-Attribute
document.addEventListener("DOMContentLoaded", async function () {
  await document.fonts.load('200px "Shadow of Xizor"');
  let text = document.getElementById("canvas");
  var ctx = text.getContext("2d"),
    font = "250px 'Shadow of Xizor'",
    w = text.width,
    h = text.height,
    curve,
    offsetY,
    bottom,
    textHeight,
    dltY,
    angleSteps = 180 / w,
    i = w,
    y,
    os = document.createElement("canvas"),
    octx = os.getContext("2d");

  os.width = w;
  os.height = h;

  octx.font = font;
  octx.fillStyle = "yellow";
  octx.textBaseline = "top";
  octx.textAlign = "center";

  function renderBridgeText(t) {
    curve = 50;
    offsetY = 0;
    textHeight = 200;
    bottom = 200;
    octx.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);

    octx.fillText(t, w * 0.5, 0);

    /// slide and dice
    i = w;
    dltY = curve / textHeight;
    y = 0;
    while (i--) {
      y = bottom - curve * Math.sin((i * angleSteps * Math.PI) / 180);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(os, i, 0, 1, textHeight, i, (h * 0.5 ) - (0 / textHeight) * y, 1, y
      );
    }
  }

  let titlebox = document.getElementById("title");
  let line1edit = document.getElementById("line1edit");
  let line2edit = document.getElementById("line2edit");
  document.getElementById("byline1").innerText = line1edit.value;
  document.getElementById("byline2").innerText = line2edit.value;
  renderBridgeText(titlebox.value.toLowerCase());
  titlebox.addEventListener("input", function () {
    renderBridgeText(titlebox.value.toLowerCase());
  });

  line1edit.addEventListener("input", function () {
    document.getElementById("byline1").innerText = line1edit.value;
  });

  line2edit.addEventListener("input", function () {
    document.getElementById("byline2").innerText = line2edit.value;
  });
});
