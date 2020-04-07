import React from "react"

import PageContent from "../components/PageContent"

const NotFoundPage = () => (
  <PageContent title="Seite konnte nicht gefunden werden." fallback="/" is404="true"/>
)

export default NotFoundPage
