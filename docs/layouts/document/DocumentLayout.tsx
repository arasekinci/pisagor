import React from 'react'
import Page, { PageHeader } from '@pisagor/page'

import MainLayout from '@/layouts/main'

import type { DocumentLayoutProps } from './DocumentLayout.types'

const DocumentLayout: React.FunctionComponent<DocumentLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <MainLayout title={title}>
      <Page>
        <PageHeader title={title}>
          <p>{description}</p>
        </PageHeader>
        {children}
      </Page>
    </MainLayout>
  )
}

export default DocumentLayout
