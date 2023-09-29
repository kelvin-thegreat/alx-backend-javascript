export default function loadBalancer(chinaDownload, USDownload) {
    // Use Promise.race to resolve with the value of the first resolved promise.
    return Promise.race([chinaDownload, USDownload]);
  }
  