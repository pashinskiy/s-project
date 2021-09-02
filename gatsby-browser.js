import muiRootWrapper from "./mui-root-wrapper"
export const wrapRootElement = muiRootWrapper

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0)
  return [0, 0]
}
