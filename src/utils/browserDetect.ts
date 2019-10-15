
import MobileDetect from "mobile-detect";
const md = new MobileDetect(navigator.userAgent);

export function isWechat() {
  return /micromessenger/.test(navigator.userAgent.toLowerCase());
}

export function isPC() {
  return !md.mobile();
}

export function isMacintosh() {
  return navigator.platform.indexOf("Mac") > -1;
}

export function isWindows() {
  return navigator.platform.indexOf("Win") > -1;
}

export function isMobile() {
  return Boolean(md.mobile());
}

export function isIOS() {
  const iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  return iDevices.some(device => navigator.userAgent.includes(device));
}

export function isAndroid() {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.indexOf("android") > -1;

  return isAndroid;
}

export function isTablet() {
  return md.tablet();
}
