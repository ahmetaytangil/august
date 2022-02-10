import React from "react"
import ContentLoader from "react-content-loader"

const LoaderImages = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="6" rx="0" ry="0" width="352" height="223" />
  </ContentLoader>
)

export default LoaderImages