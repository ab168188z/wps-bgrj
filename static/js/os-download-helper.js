// 定义下载链接常量
const DOWNLOAD_LINKS = {
  WINDOWS: "https://pc-package.wpscdn.cn/wps/download/W.P.S.20.3076.exe",
  MAC_BASE: "https://downapi.mydown.com/down/s/hp",
};

const WPS_MAC_SOFT_ID = "303771";
// 用于判断操作系统类型的工具函数
function getOperatingSystem() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("win") !== -1) {
    return "windows";
  } else if (userAgent.indexOf("mac") !== -1) {
    return "mac";
  }
  return "other";
}

// 获取Mac下载链接（带动态参数）
function getMacDownloadLink(softId = WPS_MAC_SOFT_ID, channel = "10,4,0") {
  return `${DOWNLOAD_LINKS.MAC_BASE}${softId}_${channel}`;
}

// 自动设置下载链接的函数
function setupDownloadLinks(
  btnClassName = ".os-specific-download",
  softId = WPS_MAC_SOFT_ID
) {
  const os = getOperatingSystem();
  const downloadLinks = document.querySelectorAll(btnClassName);

  downloadLinks.forEach((link) => {
    // 原始下载链接
    // const originalHref = link.href;

    // 根据操作系统设置 href 属性  windows不更修改，保持原有链接不变
    if (os === "windows") {
      // link.href = DOWNLOAD_LINKS.WINDOWS;
      // 保持原有链接不变
      //   link.href = originalHref;
    } else if (os === "mac") {
      link.href = getMacDownloadLink(softId);
      // 修改为mac操作系统图标
      const winIcon = link.querySelector(".win_icon");
      if (winIcon) {
        const isBottomBtn = link.classList.contains("bottombtn");
        const imgSrc = isBottomBtn 
          ? "https://resource.yesky.com/TLimages2023/common/images/mac_icon_red.png"
          : "https://resource.yesky.com/TLimages2023/common/images/mac_icon_white.png";
        
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "mac_icon";
        img.alt = "";
        img.style.cssText = `
          width: ${isBottomBtn ? "35px" : "31px"};
          height: 36px;
          margin-right: 20px;
          margin-top: -6px;
        `;
        
        winIcon.replaceWith(img); // 替换图标
      }
    }
    // 添加操作系统标识类，便于样式定制
    link.classList.add(`os-${os}`);
  });
}
