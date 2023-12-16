import Notice from "../Components/Notification";
import {utils} from 'ethers'
interface QueryParams {
  [key: string]: string;
}

export function getQueryParams (url:string) {
  const queryParams:QueryParams = {};
  const paramsString = url.split('?')[1];
  if (paramsString) {
    const paramsArray = paramsString.split('&');
    for (const element of paramsArray) {
      const param = element.split('=');
      const key = decodeURIComponent(param[0]);
      const value = decodeURIComponent(param[1]);
      queryParams[key] = value;
    }
  }

  return queryParams;
}
export type Timer = {
  day: {
    count: string,
    unit: string
  },
  hour: {
    count: string,
    unit: string
  },
  minute: {
    count: string,
    unit: string
  },
  second: {
    count: string,
    unit: string
  }
}
export function countDown(endTimeStamp: number) {
  let nowTimeStamp = new Date().getTime()
  let time: Timer
  if (endTimeStamp > nowTimeStamp) {
    let mss = endTimeStamp - nowTimeStamp;
    let days = parseInt(`${mss / (1000 * 60 * 60 * 24)}`)
    let hours = parseInt(`${(mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)}`)
    let minutes = parseInt(`${(mss % (1000 * 60 * 60)) / (1000 * 60)}`)
    let seconds = parseInt(`${(mss % (1000 * 60)) / 1000}`)
    time = {
      day: {count: days < 10 ? "0" + days : `${days}`, unit: 'd'},
      hour: {count: hours < 10 ? "0" + hours : `${hours}`, unit: 'h'},
      minute: {count: minutes < 10 ? "0" + minutes : `${minutes}`, unit: 'm'},
      second: {count: seconds < 10 ? "0" + seconds : `${seconds}`, unit: 's'}
      // mss: mss,
    }
  } else {
    time = {
      day: {count: '00', unit: 'd'},
      hour: {count: '00', unit: 'h'},
      minute: {count: '00', unit: 'm'},
      second: {count: '00', unit: 's'}
      // mss: '00',
    }
  }
  return time
}

export function awaitWrap<T>(promise: Promise<T>) {
  return promise
      .then((data:T) => [data, null])
      .catch(err => [null, err])
}

export async function copyToClipboard(str: string) {
  if (navigator.clipboard && navigator.permissions) {
    await navigator.clipboard.writeText(str)
    Notice.Success({title: 'Copy success'})
  } else {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    Notice.Success({title: 'Copy success'})
  }
}

export function getInput(amount: number | string, decimal: number) {
  return utils.parseUnits(String(amount), decimal);
}

export const minAllowance = '100000000000000000000'
export const MaxApproveBalance = '100000000000000000000000000'
// export const raitAddress = '0xD851Ec448144A0BEE21ee10D09906E2fc104BFf6'
// export const spender = '0x792a0130D3D0337F9361C6F07F0C270d6db84a86'
