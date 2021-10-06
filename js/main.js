// gsap.registerPlugin(ScrollTrigger);

// // ScrollTrigger.create({
// //   trigger: ".section",
// //   markers: true,
// //   start: "top top",
// //   toggleClass: { targets: ".glitch", className: "is-glitch" },
// // });
gsap.to(".is-glitch", {
  scrollTrigger: {
    trigger: ".section", //アニメーションが始まるトリガーとなる要素
    start: "top top", //アニメーションが始まる位置を指定
    toggleClass: { targets: ".glitch", className: "is-glitch" },
    markers: true, // 検証用のマーカーを表示
  },
});
gsap.to(".is-show", {
  //アニメーションしたい要素を指定
  scrollTrigger: {
    trigger: ".section", //アニメーションが始まるトリガーとなる要素
    start: "top top", //アニメーションが始まる位置を指定
    toggleClass: { targets: ".show", className: "is-show" },
    markers: true, // 検証用のマーカーを表示
    once: true,
  },
});
