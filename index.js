function greet() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}
greet();
setInterval(greet, 1000);

const skills1 = {
  Hobbies: {
    title: "Cat Parent",
    img: "Assets/nimbus.png",
    text: "Being a cat parent means embracing quiet companionship, daily curiosity, and those unexpected moments of affection that only a feline can give. It teaches patience, builds routines, and fills your life with calm joy, from gentle purring to spontaneous zoomies. There's something special about earning a cat’s trust because it’s not given easily and that makes it even more meaningful.",
  },
  Skills: {
    title: "Programming",
    img: "Assets/code.png",
    text: "I stared at the code for hours and it stared back, smug as ever. Fixed one bug and five more appeared like a digital hydra. In the end the semicolon quietly ruined everything again",
  },
};

function changetitle() {
  const header = document.getElementsByClassName("skill-header")[0];
  const current = (header.innerText =
    header.innerText === "Hobbies" ? "Skills" : "Hobbies");
  const data = skills1[current];
  document.getElementById("skill-title1").innerText = data.title;
  document.getElementById("skill-image1").src = data.img;
  document.getElementById("skill-text1").innerText = data.text;
}
