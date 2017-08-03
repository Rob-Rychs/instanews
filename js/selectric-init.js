import $ from 'jquery';

export function init() {
  $('select').selectric({
  disableOnMobile: false,
  nativeOnMobile: false,
  maxHeight: 200,
  responsive: true,
  inheritOriginalWidth: false,
  forceRenderAbove: false,
  });
}
