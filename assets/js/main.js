$(function () {
  function drawerAnimation() {
    function toggleDrawer() {
      $('.hamburger').toggleClass('active')
      $('.close-button').toggleClass('active')
      $('.drawer').toggleClass('active')
      $('.filter').toggleClass('active')
    }

    function setEvent() {
      $('.hamburger').on('click', function () {
        toggleDrawer()
      })
      $('.close-button').on('click', function () {
        toggleDrawer()
      })
      $('.hamburger').on('mouseover', function () {
        $(this).addClass('mouseover')
        $(this).removeClass('mouseout')
      })
      $('.hamburger').on('mouseout', function () {
        $(this).removeClass('mouseover')
        $(this).addClass('mouseout')
      })
      $('.menu-link').on('mouseover', function () {
        $(this).addClass('mouseover')
      })
      $('.menu-link').on('mouseout', function () {
        $(this).removeClass('mouseover')
      })
    }

    setEvent()
  }

  drawerAnimation()
})
