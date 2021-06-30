$(document).ready(function () {
  // Splide Init
  new Splide(".splide", {
    autoplay: true,
    arrows: false,
    perPage: 4,
    type: "loop",
    gap: "1.5em",
    interval: 3000,
    pagination: false,
    speed: 800,
    perMove: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
  }).mount()

  // Navbar Collapse
  $(".navbar-toggler").on("click", function () {
    $(".navCollapse").toggleClass("show")
  })

  $(".navbar-toggler").click(function () {
    $("#icon-togg").toggleClass("fa-bars")
    $("#icon-togg").toggleClass("fa-times")

    $(".overlay").toggleClass("d-none")
  })
  $(".overlay").click(function () {
    $(".navCollapse").toggleClass("show")
    $(".overlay").toggleClass("d-none")
    $("#icon-togg").toggleClass("fa-bars")
    $("#icon-togg").toggleClass("fa-times")
  })

  // ExplainMeans
  const theMeans = [
    "In Greek mythology, Biston was the son of Ares and Callirrhoe.",
    "Biston is an insect.",
    "Biston comes from the Hungarian language 'Biztonság' which means Security.",
  ]
  let theMeansCount = 0
  $("#explainMeans").text(theMeans[0])
  $(".navbar-brand").on("click", function (e) {
    e.preventDefault()
    if (theMeansCount < theMeans.length - 1) {
      theMeansCount += 1
      $("#explainMeans").text(theMeans[theMeansCount])
    } else {
      theMeansCount = 0
      $("#explainMeans").text(theMeans[theMeansCount])
    }
  })
})
