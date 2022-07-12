import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={637}
        height={72}
        viewBox="0 0 637 72"
        backgroundColor="rgba(139, 146, 154, 0.11)"
        foregroundColor="rgba(255, 255, 255, 0.24)"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="637" height="72" />
    </ContentLoader>
)

export default Skeleton
