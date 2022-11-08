$(function () {
  $('.menu-link').on('mouseover', function () {
    $(this).addClass('active')
  })
  $('.menu-link').on('mouseout', function () {
    $(this).removeClass('active')
  })
})
